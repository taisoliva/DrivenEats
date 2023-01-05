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

    const Salgado = document.querySelector(".selecionadoSalgado h2").innerHTML;
    const Bebida = document.querySelector(".selecionadoBebida h2").innerHTML;
    const Doce = document.querySelector(".selecionadoDoce h2").innerHTML;

    let valorSalgado = document.querySelector(".selecionadoSalgado span").innerHTML;
    let valorBebida = document.querySelector(".selecionadoBebida span").innerHTML;
    let valorDoce = document.querySelector(".selecionadoDoce span").innerHTML;

    valorSalgado = valorSalgado.replace(",",".");
    valorBebida = valorBebida.replace(",",".");
    valorDoce = valorDoce.replace(",",".");
    

    const total = (Number(valorBebida) + Number(valorDoce) + Number(valorSalgado)).toFixed(2);
    

    texto = "Olá, gostaria de fazer o pedido: \n - Prato:" +  Salgado + "\n - Bebida: " + Bebida + "\n - Sobremesa: " + Doce + "\n Total: R$" + total;

    texto = window.encodeURIComponent(texto);

    window.open(" https://wa.me/5524981494288?text=" + texto);

    console.log(texto);

    
}

