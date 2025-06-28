




document.addEventListener("click", function(elemento){
    const pasta = elemento.target.closest(".imgpasta");
        if(pasta){
            //SELECIONA O MEU COLAPSE ESCONDIDO BASEADO NA PASTA QUE EU CLIQUEI
             const pastaAtual =pasta.closest(".containerCollapse");
             //AGORA EU SELECIONO A TAG QUE TEM A CLASSE QUE EU QUERO FAZER A ALTERAÇÃO
             const conteudo = pastaAtual.querySelector(".conteudoCollapse");
            
             //REMOVE A CLASSE SE TIVER E SE NÃO TIVER ADICIONA
             
             if(conteudo.classList.contains("escondido")){
                conteudo.classList.remove("escondido");
                //CHAMA FUNÇÃO PARA ABRIR PASTA
                abrirFecharPasta(pasta,true)
             }else{
                conteudo.classList.add("escondido");
                //CHAMA FUNÇÃO PARA FECHAR A PASTA
                abrirFecharPasta(pasta,false);
             };

        };

});

function abrirFecharPasta(pasta, aberta){
pasta.src = aberta ?  
"/assets/images/pastas-mural/pasta-aberta.png" : "/assets/images/pastas-mural/pasta-fechada.png";
};



