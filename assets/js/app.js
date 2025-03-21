

function voltar(event,referencia){
// previnir de voltar para a página anterior mesmo clicando em cancelar
event.preventDefault();


    if(confirm("Quer mesmo voltar? Seus dados nesta sessão serão perdidos!")){
        window.location.href = referencia;
    }else{
        return false;
    }
}


// Arrays de verbos e traduções

const listaDeVerbos = ["To be", "To have", "To do", "To say", "To go", "To get", "To make", "To know", "To think", "To take"
    ,"To see", "To come", "To want", "To look", "To use", "To find", "To give", "To tell", "To work", "To call",
];
const listaTraducoesVerbos = {
    "To be": ["ser", "estar"],
    "To have": ["ter", "possuir"],
    "To do": ["fazer", "executar"],
    "To say": ["dizer", "falar"],
    "To go": ["ir"],
    "To get": ["obter", "conseguir", "pegar","ter"],
    "To make": ["fazer", "criar", "produzir"],
    "To know": ["saber", "conhecer"],
    "To think": ["pensar", "achar"],
    "To take": ["pegar", "levar"],
    "To see": ["ver"],
    "To come": ["vir"],
    "To want": ["querer"],
    "To look": ["olhar", "parecer"],
    "To use": ["usar", "utilizar"],
    "To find": ["encontrar", "achar"],
    "To give": ["dar"],
    "To tell": ["contar", "dizer"],
    "To work": ["trabalhar", "funcionar"],
    "To call": ["chamar", "ligar"],
};

const listaPhrasalVerbs = [
    "To Break Down",
    "To Calm Down",
    "To Call Off",
    "To Cheer Up",
    "To Clean Up",
    "To Come Up",
    "To Cut Down",
    "To Turn Up",
    "To Turn Down",
    "To Turn On",
    "To Turn Off",
    "To Count On",
    "To End Up",
    "To Dress Up",
    "To Find Out",
    "To Get Away",
    "To Get Into",
    "To Get Off",
    "To Go On",
    "To Go Over",
];

const listaPhrasalVerbsTraducoes = {
    "To Break Down": ["quebrar", "falhar", "parar de funcionar"],
    "To Calm Down": ["acalmar-se", "se acalmar", "acalmar"],
    "To Call Off": ["cancelar", "desmarcar", "suspender"],
    "To Cheer Up": ["animar-se", "alegrar-se", "animar", "se animar", "alegrar"],
    "To Clean Up": ["limpar", "arrumar", "organizar"],
    "To Come Up": ["surgir", "aparecer", "subir"],
    "To Cut Down": ["cortar", "diminuir", "reduzir"],
    "To Turn Up": ["aumentar", "ligar", "aparecer", "chegar"],
    "To Turn Down": ["rejeitar", "diminuir", "abaixar", "recusar"],
    "To Turn On": ["ligar", "acender", "abrir"],
    "To Turn Off": ["desligar", "apagar", "fechar"],
    "To Count On": ["contar com", "depender de", "confiar em"],
    "To End Up": ["acabar", "terminar", "parar"],
    "To Dress Up": ["vestir-se bem", "arrumar-se", "fantasiar-se", "se vestir bem", "se arrumar", "se fantasiar"],
    "To Find Out": ["descobrir", "averiguar", "saber"],
    "To Get Away": ["escapar", "fugir", "sair"],
    "To Get Into": ["entrar", "envolver-se", "meter-se", "se envolver", "se meter"],
    "To Get Off": ["descer", "sair", "deixar", "partir"],
    "To Go On": ["continuar", "seguir", "prosseguir", "passar"],
    "To Go Over": ["revisar", "passar por", "analisar", "examinar"],
};


//Universal
let tentativas = 3;
let fase = 1;
let tipo;


//Nivel 1
let verbosDisponiveis = [...listaDeVerbos];
let verboAtual = "";

//Nivel 2
let phrasalVerbsDisponiveis = [...listaPhrasalVerbs];
let phrasalVerbAtual = "";




// Passo 1: Iniciar o jogo
function iniciarNivel(novoTipo){
    tipo = novoTipo;
    if(tipo === "verbo"){
        verboAtual = escolherAleatorio(verbosDisponiveis);
        mensagemInicial(() => checarResposta(verboAtual, listaTraducoesVerbos), verboAtual);
    }else{
        phrasalVerbAtual = escolherAleatorio(phrasalVerbsDisponiveis);
        mensagemInicial(() => checarResposta(phrasalVerbAtual, listaPhrasalVerbsTraducoes), phrasalVerbAtual);
    }

    
    document.getElementById("campoTentativa").removeEventListener("keypress", handleProximoPasso);
    document.getElementById("campoTentativa").removeEventListener("keypress", handleChecarResposta);
    document.getElementById("campoTentativa").addEventListener("keypress", handleChecarResposta);

}



// Função para verificar se o usuário apertou "Enter" para checar a resposta
function handleChecarResposta(event) {
    if (event.key === "Enter") {
        if (tipo === "verbo") {
            checarResposta(verboAtual, listaTraducoesVerbos);
        } else {
            checarResposta(phrasalVerbAtual, listaPhrasalVerbsTraducoes);
        }
    }
}


// Passo 2: Mostrar a mensagem inicial
function mensagemInicial(target,opcao){

    document.querySelector('.container__nivel__conteudo').innerHTML = `
    <h2>Fase ${fase}/20</h2>
    <br>
    <h1 class="destaque">${opcao}</h1>
        <section class="container__nivel__conteudo__inputs">
            <p>Tradução: </p> 
            <input type="text" id="campoTentativa" placeholder="Digite a resposta">
        </section>
        <br>
        <br>
        <br>
        <div class="container__nivel__conteudo__botao">
        <button id="botaoCheck" class="btn__checarVerbo">Check</button>
        </div>
        `;

        document.getElementById("campoTentativa").focus();
        document.getElementById("botaoCheck").addEventListener("click", target);

}


// Passo 3: Escolher um verbo aleatório
function escolherAleatorio(lista){
    const indice = Math.floor(Math.random() * lista.length);
    const escolhido = lista[indice];
    lista.splice(indice, 1); // Remove o verbo escolhido da lista de verbos disponíveis
    return escolhido;
}



//Passo 4: Checar a resposta do usuário
function checarResposta(verbo, listaTraducao){
    
    // coletar dados do HTML
    const resultadoDiv = document.querySelector(".container__nivel__conteudo__resultados");
    const campoBotao = document.querySelector(".container__nivel__conteudo__botao");
    const resultadoTexto = document.getElementById("resultado");
    const respostasTexto = document.getElementById("respostasCorretas");
    const respostaUsuario = document.getElementById("campoTentativa").value.trim().toLowerCase();
    const respostasAceitas = listaTraducao[verbo].map(resposta => resposta.toLowerCase());


    if(respostaUsuario === "") {
        alert("Digite uma resposta!");
        document.getElementById("campoTentativa").focus();
        return;
    }
    resultadoDiv.classList.remove("invisivel");


    // Verificar se a resposta do usuário está correta
    //Acertou
    if(respostasAceitas.includes(respostaUsuario)){
        fase ++;
        resultadoTexto.innerHTML = "Correto!";
        respostasTexto.innerHTML = `Traduções aceitas: ${respostasAceitas.join(", ")}. 
        <br>
        <br>
        Tecle "Enter" ou clique no botão para prosseguir.`;
        resultadoDiv.classList.remove("erro");
        campoBotao.innerHTML = `
        <button onclick="proximoPasso()" class="btn__proximoVerbo">Próxima fase!</button>
        `;


        //otimizar com enter

        document.getElementById("campoTentativa").removeEventListener("keypress", handleChecarResposta);
        document.getElementById("campoTentativa").removeEventListener("keypress", handleProximoPasso);
        document.getElementById("campoTentativa").addEventListener("keypress", handleProximoPasso);



    }else {
        tentativas --;

        // Perder o jogo
        if(tentativas === 0) {
            document.querySelector(".container__nivel").innerHTML = `
            <div class="container__nivel__conteudo__final">
            Sem mais tentativas restantes! 
            A resposta era:${respostasAceitas.join(", ")}
            <br>
            <a href="/assets/pages/seletorniveis.php" class="link__menu" style="text-decoration:underline">Clique aqui para voltar ao menu principal</a>
            </div>
            `;
            return;
        }

        // para aparecer a palavra "tentativa" corretamente
        let palavraTentativa = tentativas === 1 ? "tentativa" : "tentativas";
        let palavraRestante = tentativas === 1 ? "restante" : "restantes";



        // Errou
        resultadoTexto.innerHTML = `Incorreto! ${tentativas} ${palavraTentativa} ${palavraRestante}.`;
        resultadoDiv.classList.add("erro");
        respostasTexto.textContent = "";
        document.getElementById("campoTentativa").value = "";
        document.getElementById("campoTentativa").focus();

    }

}


//Passo 5: Próxima fase
function proximoPasso(){
    // Fase é somada na função anterior
    if(fase === 20){
        verbosDisponiveis = [...listaDeVerbos];
        phrasalVerbsDisponiveis = [...listaPhrasalVerbs];
        fase = 1;

        //redirecionar 
        window.location.href = "/assets/php/finalizar.php";
        return;
    }


    document.getElementById("campoTentativa").value = "";
    document.getElementById("campoTentativa").focus();
    document.querySelector(".container__nivel__conteudo__resultados").classList.add("invisivel");
    
    iniciarNivel(tipo);
}


//Handler para chamar a função proximoPasso com enter
function handleProximoPasso(event) {
    if (event.key === "Enter") {
        proximoPasso();
    }
}