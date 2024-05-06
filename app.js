let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,"Brazilian Portuguese Male",{rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1","Jogo do número secreto");
    exibirTextoNaTela("p",`Escolha um número entre 1 e ${numeroLimite}`);
}

function verificarChute(){
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto){
        let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;

        exibirTextoNaTela("h1", "Parabéns");
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("chutar").setAttribute("disabled", true);
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela("p","O número secreto é menor!");
        } else{
            exibirTextoNaTela("p","O número secreto é maior!");
        }
        tentativas++;
        limparCampo();
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
    document.getElementById("chutar").removeAttribute("disabled");
};

function limparCampo(){
    let chute = document.querySelector("input");
    chute.value = "";
}

function gerarNumeroAleatorio() {
    let numeroAleatorio = parseInt(Math.random()* numeroLimite + 1);
    let qunatidadeDeElementosNalista = listaDeNumerosSorteados.length;
    if(qunatidadeDeElementosNalista == numeroLimite){
        listaDeNumerosSorteados =[];
    }

    if(listaDeNumerosSorteados.includes(numeroAleatorio)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroAleatorio);
        console.log(listaDeNumerosSorteados);
        return numeroAleatorio;
    }

}