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
        }
    }
});