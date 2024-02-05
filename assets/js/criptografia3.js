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
        if(letra == "a") return "做";
        if(letra == "b") return "說";
        if(letra == "c") return "想";
        if(letra == "d") return "知";
        if(letra == "e") return "道";
        if(letra == "f") return "等";
        if(letra == "g") return "待";
        if(letra == "h") return "拿";
        if(letra == "i") return "д";
        if(letra == "j") return "й";
        if(letra == "k") return "ж";
        if(letra == "l") return "з";
        if(letra == "m") return "ё";
        if(letra == "n") return "я";
        if(letra == "o") return "ч";
        if(letra == "p") return "ы";
        if(letra == "q") return "あ";
        if(letra == "r") return "ざ";
        if(letra == "s") return "い";
        if(letra == "t") return "ま";
        if(letra == "u") return "す";
        if(letra == "v") return "こ";
        if(letra == "w") return "ん";
        if(letra == "x") return "に";
        if(letra == "y") return "大";
        if(letra == "z") return "个";
        if(letra == " ") return "子";

        return letra;
    };

    static descriptografar(codigo){
        codigo = codigo.replaceAll("道", "e");
        codigo = codigo.replaceAll("д", "i");
        codigo = codigo.replaceAll("做", "a");
        codigo = codigo.replaceAll("ч", "o");
        codigo = codigo.replaceAll("す", "u");
        codigo = codigo.replaceAll("說", "b");
        codigo = codigo.replaceAll("想", "c");
        codigo = codigo.replaceAll("知", "d");
        codigo = codigo.replaceAll("等", "f");
        codigo = codigo.replaceAll("待", "g");
        codigo = codigo.replaceAll("拿", "h");
        codigo = codigo.replaceAll("й", "j");
        codigo = codigo.replaceAll("ж", "k");
        codigo = codigo.replaceAll("з", "l");
        codigo = codigo.replaceAll("ё", "m");
        codigo = codigo.replaceAll("я", "n");
        codigo = codigo.replaceAll("ы", "p");
        codigo = codigo.replaceAll("あ", "q");
        codigo = codigo.replaceAll("ざ", "r");
        codigo = codigo.replaceAll("い", "s");
        codigo = codigo.replaceAll("ま", "t");
        codigo = codigo.replaceAll("こ", "v");
        codigo = codigo.replaceAll("ん", "w");
        codigo = codigo.replaceAll("に", "x");
        codigo = codigo.replaceAll("大", "y");
        codigo = codigo.replaceAll("个", "z");
        codigo = codigo.replaceAll("子", " ");
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