const inputTema = document.getElementById('inputTema');
const linkCSSThemeIndex = document.querySelector("link.tema");
const sunImg = document.getElementById("sol");
const moonImg = document.getElementById("lua");
var atomoImgs = [document.getElementById('atomo1'), document.getElementById('atomo2')];
const engrenagem = document.getElementById('engrenagem');
const seta1 = document.getElementById('seta1');
const seta2 = document.getElementById('seta2');

function mudarTemaIndex() {
    if (inputTema.checked) {
        linkCSSThemeIndex.setAttribute("href", "./src/styles/dark.css");
        sunImg.setAttribute("src", "./src/img/sunwhite.png");
        moonImg.setAttribute("src", "./src/img/moonwhite.png");
        engrenagem.setAttribute("src", "./src/img/engrenagemwhite.png");
        seta1.setAttribute("src", "./src/img/arrowwhite.png")
        seta2.setAttribute("src", "./src/img/arrowwhite.png")
        for(let i in atomoImgs){
            atomoImgs[i].setAttribute("src", "./src/img/atomwhite.png");
        }
    } else {
        linkCSSThemeIndex.setAttribute("href", "./src/styles/light.css");
        sunImg.setAttribute("src", "./src/img/sun.png");
        moonImg.setAttribute("src", "./src/img/moon.png");
        engrenagem.setAttribute("src", "./src/img/engrenagem.png");
        seta1.setAttribute("src", "./src/img/arrow.png")
        seta2.setAttribute("src", "./src/img/arrow.png")

        for(let i in atomoImgs){
            atomoImgs[i].setAttribute("src", "./src/img/atom.png");
        }
    }
  }
