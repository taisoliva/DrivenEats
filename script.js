function Selecionar(produtoEscolhido){
    
    const produtoEscolhidoAnteriormente = document.querySelector(".selecionadoSalgado");

    if(produtoEscolhidoAnteriormente !== null)
    {
        produtoEscolhidoAnteriormente.classList.remove("selecionadoSalgado");
        produtoEscolhidoAnteriormente.classList.add("desativar");
    }

    const produto = document.querySelector(produtoEscolhido)
    produto.classList.add("selecionadoSalgado");
    produto.classList.remove("desativar");
}

function SelecionarBebida(produtoEscolhido){
    
    const produtoEscolhidoAnteriormente = document.querySelector(".selecionadoBebida");

    if(produtoEscolhidoAnteriormente !== null)
    {
        produtoEscolhidoAnteriormente.classList.remove("selecionadoBebida");
        produtoEscolhidoAnteriormente.classList.add("desativar");
    }

    const produto = document.querySelector(produtoEscolhido)
    produto.classList.add("selecionadoBebida");
    produto.classList.remove("desativar");
}

function SelecionarDoce(produtoEscolhido){
    
    const produtoEscolhidoAnteriormente = document.querySelector(".selecionadoDoce");

    if(produtoEscolhidoAnteriormente !== null)
    {
        produtoEscolhidoAnteriormente.classList.remove("selecionadoDoce");
        produtoEscolhidoAnteriormente.classList.add("desativar");
        
    }

    const produto = document.querySelector(produtoEscolhido)
    produto.classList.add("selecionadoDoce");
    produto.classList.remove("desativar");
}

