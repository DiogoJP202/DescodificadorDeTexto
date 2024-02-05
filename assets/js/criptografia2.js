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
        if(letra == "e") return "enter";
        if(letra == "i") return "imes";
        if(letra == "a") return "ai";
        if(letra == "o") return "ober";
        if(letra == "u") return "ufat";
        if(letra == "b") return "1";
        if(letra == "c") return "2";
        if(letra == "d") return "3";
        if(letra == "f") return "4";
        if(letra == "g") return "5";
        if(letra == "h") return "6";
        if(letra == "j") return "7";
        if(letra == "k") return "8";
        if(letra == "l") return "9";
        if(letra == "m") return "0";
        if(letra == "n") return "-";
        if(letra == "p") return "*";
        if(letra == "q") return "!";
        if(letra == "r") return "@";
        if(letra == "s") return "#";
        if(letra == "t") return "$";
        if(letra == "v") return "%";
        if(letra == "w") return "&";
        if(letra == "x") return "_";
        if(letra == "y") return "=";
        if(letra == "z") return "/";
        if(letra == " ") return "~";
        return letra;
    };

    static descriptografar(codigo){
        codigo = codigo.replaceAll("enter", "e");
        codigo = codigo.replaceAll("imes", "i");
        codigo = codigo.replaceAll("ai", "a");
        codigo = codigo.replaceAll("ober", "o");
        codigo = codigo.replaceAll("ufat", "u");
        codigo = codigo.replaceAll("1", "b");
        codigo = codigo.replaceAll("2", "c");
        codigo = codigo.replaceAll("3", "d");
        codigo = codigo.replaceAll("4", "f");
        codigo = codigo.replaceAll("5", "g");
        codigo = codigo.replaceAll("6", "h");
        codigo = codigo.replaceAll("7", "j");
        codigo = codigo.replaceAll("8", "k");
        codigo = codigo.replaceAll("9", "l");
        codigo = codigo.replaceAll("0", "m");
        codigo = codigo.replaceAll("-", "n");
        codigo = codigo.replaceAll("*", "p");
        codigo = codigo.replaceAll("!", "q");
        codigo = codigo.replaceAll("@", "r");
        codigo = codigo.replaceAll("#", "s");
        codigo = codigo.replaceAll("$", "t");
        codigo = codigo.replaceAll("%", "v");
        codigo = codigo.replaceAll("&", "w");
        codigo = codigo.replaceAll("_", "x");
        codigo = codigo.replaceAll("=", "y");
        codigo = codigo.replaceAll("/", "z");
        codigo = codigo.replaceAll("~", " ");
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