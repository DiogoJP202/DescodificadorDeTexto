class animations{
    static generateColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        
        return color; 
    };

    FontRaibow(){
        const fonte = document.querySelector('.fontRaibow');

        fonte.style.color = `${animations.generateColor()}`;
        setInterval(() => setTimeout(() => fonte.style.color = `${animations.generateColor()}`, 50), 50);
    };

    getCodigo(tipo){
        const element = document.querySelector("#ICodigo");
        if(element.value == "") return alert("insira um valor!");

        animations.botoes();
        animations.criaCodigo(tipo, element.value);
    };

    /*
    A letra "e" é convertida para "enter"
    A letra "i" é convertida para "imes"
    A letra "a" é convertida para "ai"
    A letra "o" é convertida para "ober"
    A letra "u" é convertida para "ufat"
    */

    static criaCodigo(valorBooleano, codigo){
        if(valorBooleano === true){
            const Resultado = document.querySelector("#Resultado");
            let stringCodigo = codigo.toLowerCase();
            
            stringCodigo = stringCodigo.split("");

            for(let contador = stringCodigo.length -1; contador >= 0; contador--){
                stringCodigo[contador] = animations.criptografar(stringCodigo[contador]);
            };

            Resultado.innerHTML = stringCodigo.join("");
        };

        if(valorBooleano === false){
            const Resultado = document.querySelector("#Resultado");
            let stringCodigo = codigo.toLowerCase();

            stringCodigo = animations.descriptografar(stringCodigo);

            Resultado.innerHTML = stringCodigo;
        };
    };

    static criptografar(letra){
        if(letra == "e") return "enter"
        if(letra == "i") return "imes"
        if(letra == "a") return "ai"
        if(letra == "o") return "ober"
        if(letra == "u") return "ufat"
        return letra;
    }

    static descriptografar(codigo){
        codigo = codigo.replaceAll("enter", "e");
        codigo = codigo.replaceAll("imes", "i");
        codigo = codigo.replaceAll("ai", "a");
        codigo = codigo.replaceAll("ober", "o");
        codigo = codigo.replaceAll("ufat", "u");
        return codigo;
    }

    static botoes(){
        const copyButton = document.querySelector("#copyButton");
        const Resultado = document.querySelector("#Resultado");
        if(copyButton.classList.contains("none")) copyButton.classList.remove("none");
        if(Resultado.classList.contains("none")) Resultado.classList.remove("none");

        const menuTextoDeSaida = document.querySelector("#textoDeSaida_menu");
        menuTextoDeSaida.classList.add("none");
    }
};

const animation = new animations();
animation.FontRaibow();

document.addEventListener("click", e => {
    const element = e.target;

    if(element.classList.contains("hamburger") || element.classList.contains("line")){
        const hamburger = document.querySelector(".hamburger");
        const line2 = document.querySelector(".line:nth-last-child(2)");
        const menu = document.querySelector("#menu");

        if(hamburger.classList.contains("XHamburger") == true){
            hamburger.classList.remove("XHamburger");
            line2.classList.remove("none");
            menu.classList.add("none");
        } else {
            hamburger.classList.add("XHamburger");
            line2.classList.add("none");
            menu.classList.remove("none");
        };
    };

    if(element.classList.contains("criptografar")){
        const codigo = animation.getCodigo(true);
    };

    if(element.classList.contains("descriptografar")){
        const codigo = animation.getCodigo(false);
    };
});