


document.querySelectorAll(".imgpasta").forEach(function (pastas,indice){
    pastas.addEventListener("click", ()=>{
        let alvo = document.querySelectorAll(".conteudoCollapse")[indice];
        if(alvo.classList.contains("escondido")){
            alvo.classList.remove("escondido");
            alvo.classList.add("mostraCollapse");
        }else{
            alvo.classList.remove("mostraCollapse")
            alvo.classList.add("escondido")
        }

        console.log(alvo)
    })
    
});





