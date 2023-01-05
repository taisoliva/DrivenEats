let controleDeSalgado = false;
let controleDeBebida = false;
let controleDeDoce = false;




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

    controleDeSalgado = true;

    if(controleDeSalgado && controleDeBebida && controleDeDoce){
        console.log("Fechou pedido");
        botaoIniciar = document.querySelector(".iniciar");
        botaoSelecao = document.querySelector(".selecionar");

        botaoIniciar.classList.add("escondido");
        botaoSelecao.classList.remove("escondido");
    }
}

function SelecionarBebida(produtoEscolhido){

    console.log(controleDeSalgado);
    
    const produtoEscolhidoAnteriormente = document.querySelector(".selecionadoBebida");

    if(produtoEscolhidoAnteriormente !== null)
    {
        produtoEscolhidoAnteriormente.classList.remove("selecionadoBebida");
        produtoEscolhidoAnteriormente.classList.add("desativar");
    }

    const produto = document.querySelector(produtoEscolhido)
    produto.classList.add("selecionadoBebida");
    produto.classList.remove("desativar");

    controleDeBebida = true;

    if(controleDeSalgado && controleDeBebida && controleDeDoce){
        console.log("Fechou pedido");
        botaoIniciar = document.querySelector(".iniciar");
        console.log(botaoIniciar);
        botaoIniciar = document.querySelector(".iniciar");
        botaoSelecao = document.querySelector(".selecionar");

        botaoIniciar.classList.add("escondido");
        botaoSelecao.classList.remove("escondido");
    }
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

    controleDeDoce = true;

    if(controleDeSalgado && controleDeBebida && controleDeDoce){
        console.log("Fechou pedido");
        botaoIniciar = document.querySelector(".iniciar");
        console.log(botaoIniciar);

        botaoIniciar = document.querySelector(".iniciar");
        botaoSelecao = document.querySelector(".selecionar");

        botaoIniciar.classList.add("escondido");
        botaoSelecao.classList.remove("escondido");
    }
}

function enviarPedido(){
    console.log("oi botão te vi");
}

