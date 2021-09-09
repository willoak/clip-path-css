let link = document.getElementById("link");
        let section = document.getElementById("section");
        let tagHtml = document.documentElement; //pegando o elemento raiz - <HTML>

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
                if(i == 200) {
                    clearInterval(set);
                    init();
                }
            }, 10);
        }

        function gerarNumeroAleatorio (numero) {
            return Math.floor( Math.random() * numero );
        }
        
        function alterarBackground(){
            let imagens = [
                "https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg",
                "https://images.pexels.com/photos/1705252/pexels-photo-1705252.jpeg"
            ];
            section.style.backgroundImage = `url(${imagens[gerarNumeroAleatorio(2)]})`
        }

        function init(){
            //mostrando aleatoriamente a bolinha
            link.style.top = `${gerarNumeroAleatorio(95)}%`;
            link.style.left = `${gerarNumeroAleatorio(95)}%`;
            tagHtml.style.setProperty("--c", 8 + "%");
            alterarBackground();
        }

        init();