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

class animations{
    constructor(){

    }

    static generateColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        
        return color; 
    }

    FontRaibow(){
        const fonte = document.querySelector('.fontRaibow');

        fonte.style.color = `${animations.generateColor()}`;
        setInterval(() => setTimeout(() => fonte.style.color = `${animations.generateColor()}`, 50), 50);
    }
}

const animation = new animations();
animation.FontRaibow();