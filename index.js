const btn = window.document.getElementById("btn")
const zona = window.document.getElementById("zona")
const menu = window.document.getElementById("responsivo")
const item1 = window.document.getElementById("roxo")
const item2 = window.document.getElementById("vermelho")
const item3 = window.document.getElementById("azul")
const item4 = window.document.getElementById("mix")

btn.addEventListener("click", clicar)
let cor = true

function clicar(){
    if (cor == true){
        document.body.style.background = "#1C1C1C"
        zona.style.backgroundColor="#191970"
        menu.style.backgroundColor="#191970"
        item1.style.backgroundColor="#836FFF"
        item2.style.backgroundColor="#FF0000"
        item3.style.backgroundColor="#0000FF"
        item4.style.background ="linear-gradient(120deg, red, blue)"

        btn.style.transform = "translate(+133%)"
        btn.innerHTML = "off"
        cor = false
    }else{
        document.body.style.background = "white"
        zona.style.backgroundColor="#363636"
        menu.style.backgroundColor="#363636"
        item1.style.backgroundColor="grey"
        item2.style.backgroundColor="grey"
        item3.style.backgroundColor="grey"
        item4.style.background ="0"
        item4.style.backgroundColor="grey"

        btn.style.transform = "translate(0%)"
        btn.innerHTML = "on"
        cor = true
    }
}

zona.addEventListener("click", chamadaMenu)
let escondido = true
function chamadaMenu(){
    if (escondido == true){
        menu.style.transform="translate(0%)"
        zona.style.transform="translate(+335px)"
        escondido = false
    }
    else{
        menu.style.transform="translate(-110%)"
        zona.style.transform="translate(-0px)"
        escondido = true
    }
}

item1.addEventListener("click", trocaRoxo)
function trocaRoxo(){
    document.body.style.background="#9400D3"
}
item2.addEventListener("click", trocaRed)
function trocaRed(){
    document.body.style.background="#FF0000"
}
item3.addEventListener("click", trocaBlue)
function trocaBlue(){
    document.body.style.background="#00008B"
}
item4.addEventListener("click", trocaMIx)
function trocaMIx(){
    document.body.style.background="linear-gradient(120deg, red, blue)"
}