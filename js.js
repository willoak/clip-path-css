let link = document.getElementById("link");
let section = document.getElementById("section");
let tagHtml = document.documentElement; //pegando o elemento raiz - <HTML>
const loading = document.querySelector('[loading]');

tagHtml.addEventListener("mousemove", e => {
    tagHtml.style.setProperty("--x", e.clientX + "px");
    tagHtml.style.setProperty("--y", e.clientY + "px");
});

link.addEventListener("click", function(e){
    anima();
});

function anima () {
    let i = 10;
    let set = setInterval( () => {
        i++;
        tagHtml.style.setProperty("--c", i + "%");
        if(i == 300) {
            loading.style.display = "flex"
            clearInterval(set);
            init();
        }
    }, 20);
}

function gerarNumeroAleatorio (numero) {
    return Math.floor( Math.random() * numero );
}

function alterarBackground(){
    let imagens = [
        "imagens/pexels-belle-co-847393.jpg",
        "imagens/pexels-godisable-jacob-871495.jpg",
        "imagens/pexels-pixabay-247298.jpg",
        "imagens/pexels-pixabay-289225.jpg",
        "imagens/pexels-veeterzy-39811.jpg",
        "imagens/pexels-pixabay-206434.jpg",
        "imagens/pexels-tú-nguyễn-1545590.jpg",
    ];

    section.style.backgroundImage = `url(${imagens[gerarNumeroAleatorio(imagens.length)]})`
}

function loadingBox(){
    let set = setInterval( () => {
        loading.style.display = 'none';
    }, 2000);
}

function init(){
    loadingBox();
    //mostrando aleatoriamente a bolinha
    link.style.top = `${gerarNumeroAleatorio(95)}%`;
    link.style.left = `${gerarNumeroAleatorio(95)}%`;
    tagHtml.style.setProperty("--c", 8 + "%");
    alterarBackground();
}

init();