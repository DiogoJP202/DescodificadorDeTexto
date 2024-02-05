class Criptografia1{
    getCodigo(tipo){
        const element = document.querySelector("#ICodigo");
        if(element.value == "") return alert("insira um valor!");

        Criptografia1.botoes();
        Criptografia1.criaCodigo(tipo, element.value);
    };

    static criaCodigo(valorBooleano, codigo){
        if(valorBooleano === true){
            const Resultado = document.querySelector("#Resultado");
            let stringCodigo = codigo.toLowerCase();
            
            stringCodigo = stringCodigo.split("");

            for(let contador = stringCodigo.length -1; contador >= 0; contador--){
                stringCodigo[contador] = Criptografia1.criptografar(stringCodigo[contador]);
            };

            Resultado.innerHTML = stringCodigo.join("");
        };

        if(valorBooleano === false){
            const Resultado = document.querySelector("#Resultado");
            let stringCodigo = codigo.toLowerCase();

            stringCodigo = Criptografia1.descriptografar(stringCodigo);

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
    };

    static descriptografar(codigo){
        codigo = codigo.replaceAll("enter", "e");
        codigo = codigo.replaceAll("imes", "i");
        codigo = codigo.replaceAll("ai", "a");
        codigo = codigo.replaceAll("ober", "o");
        codigo = codigo.replaceAll("ufat", "u");
        return codigo;
    };

    static botoes(){
        const copyButton = document.querySelector(".copyButton");
        const Resultado = document.querySelector("#Resultado");
        if(copyButton.classList.contains("none")) copyButton.classList.remove("none");
        if(Resultado.classList.contains("none")) Resultado.classList.remove("none");

        const menuTextoDeSaida = document.querySelector("#textoDeSaida_menu");
        menuTextoDeSaida.classList.add("none");
    };
};

const Criptografia = new Criptografia1();

document.addEventListener("click", e => {
    const element = e.target;

    if(element.classList.contains("criptografar")) Criptografia.getCodigo(true);

    if(element.classList.contains("descriptografar")) Criptografia.getCodigo(false);

    if(element.classList.contains("copyButton")){
        const text = document.querySelector("#Resultado").innerText;

        element.innerText = "COPIADO!"
        navigator.clipboard.writeText(text);
        setTimeout(() => element.innerText = "Copiar" , 1000);
    };
});