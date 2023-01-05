let controleDeSalgado = false;
let controleDeBebida = false;
let controleDeDoce = false;

let Salgado = null;
let Bebida = null;
let Doce = null;
let total = 0;

let valorSalgado = null;
let valorBebida = null;
let valorDoce = null;


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
        
        botaoIniciar = document.querySelector(".iniciar");
        botaoSelecao = document.querySelector(".selecionar");

        botaoIniciar.classList.add("escondido");
        botaoSelecao.classList.remove("escondido");
    }
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

    controleDeBebida = true;

    if(controleDeSalgado && controleDeBebida && controleDeDoce){
        
        botaoIniciar = document.querySelector(".iniciar");
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
      
        botaoIniciar = document.querySelector(".iniciar");
       

        botaoIniciar = document.querySelector(".iniciar");
        botaoSelecao = document.querySelector(".selecionar");

        botaoIniciar.classList.add("escondido");
        botaoSelecao.classList.remove("escondido");
    }
}

function conferePedido(){
    
    Salgado = document.querySelector(".selecionadoSalgado h2").innerHTML;
    Bebida = document.querySelector(".selecionadoBebida h2").innerHTML;
    Doce = document.querySelector(".selecionadoDoce h2").innerHTML;

    let valorSalgado = document.querySelector(".selecionadoSalgado span").innerHTML;
    let valorBebida = document.querySelector(".selecionadoBebida span").innerHTML;
    let valorDoce = document.querySelector(".selecionadoDoce span").innerHTML;

    valorSalgado = valorSalgado.replace(",",".");
    valorBebida = valorBebida.replace(",",".");
    valorDoce = valorDoce.replace(",",".");
    

    total = (Number(valorBebida) + Number(valorDoce) + Number(valorSalgado)).toFixed(2);

    valorSalgado = valorSalgado.replace(".",",");
    valorBebida = valorBebida.replace(".",",");
    valorDoce = valorDoce.replace(".",",");
    total = total.replace(".",",")

    const mudaSalgado = document.querySelector(".dadoSalgado p:nth-child(1)").innerHTML = Salgado;
    const mudaBebida = document.querySelector(".dadoBebida p:nth-child(1)").innerHTML = Bebida;
    const mudaDoce = document.querySelector(".dadoDoce p:nth-child(1)").innerHTML = Doce;

    const mudaSalgadoPreco = document.querySelector(".dadoSalgado p:nth-child(2)").innerHTML = valorSalgado;
    const mudaBebidaPreco = document.querySelector(".dadoBebida p:nth-child(2)").innerHTML = valorBebida;
    const mudaDocePreco = document.querySelector(".dadoDoce p:nth-child(2)").innerHTML = valorDoce;

    
    const mudaTotal = document.querySelector(".dadoTotal span").innerHTML = total ;

    document.querySelector(".confirmacao").classList.remove("escondido");

    document.querySelector("main").classList.add("opacidade");


}

function enviarPedido(){

    const usuario = prompt("Digite seu nome:");
    const endereco = prompt("Digite seu endereço:");

   

    /*const Salgado = document.querySelector(".selecionadoSalgado h2").innerHTML;
    const Bebida = document.querySelector(".selecionadoBebida h2").innerHTML;
    const Doce = document.querySelector(".selecionadoDoce h2").innerHTML;

    let valorSalgado = document.querySelector(".selecionadoSalgado span").innerHTML;
    let valorBebida = document.querySelector(".selecionadoBebida span").innerHTML;
    let valorDoce = document.querySelector(".selecionadoDoce span").innerHTML;

    valorSalgado = valorSalgado.replace(",",".");
    valorBebida = valorBebida.replace(",",".");
    valorDoce = valorDoce.replace(",",".");
    

    const total = (Number(valorBebida) + Number(valorDoce) + Number(valorSalgado)).toFixed(2);*/
    

    texto = "Olá, gostaria de fazer o pedido: \n - Prato:" +  Salgado + "\n - Bebida: " + Bebida + "\n - Sobremesa: " + Doce + "\n Total: R$" + total + "\n Nome: " + usuario + "\n Endereço:" + endereco;

    texto = window.encodeURIComponent(texto);

    window.open(" https://wa.me/5524981494288?text=" + texto);
    
}

function cancelarPedido(){
    document.querySelector(".confirmacao").classList.add("escondido");
    document.querySelector("main").classList.remove("opacidade");
}
