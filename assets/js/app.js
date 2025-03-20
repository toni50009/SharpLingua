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
    "To get": ["obter", "conseguir", "receber"],
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
    "To turn on",
    "To turn off",
    "To get out",
    "To get in",
    "To put on",
    "To take off",
    "To look for",
    "To look after",
    "To come back",
    "To go out",
    "To go in",
    "To give up",
    "To give back",
    "To take down",
    "To get up",
    "To get down",
    "To look up",
    "To look down",
    "To put away",
    "To figure out",
];

const listaPhrasalVerbsTraducoes = {
    "To turn on": ["ligar", "acender"],
    "To turn off": ["desligar", "apagar"],
    "To get out": ["sair", "descer"],
    "To get in": ["entrar", "subir"],
    "To put on": ["vestir", "colocar"],
    "To take off": ["tirar", "remover"],
    "To look for": ["procurar", "buscar"],
    "To look after": ["cuidar", "tomar conta"],
    "To come back": ["voltar", "retornar"],
    "To go out": ["sair", "ir embora"],
    "To go in": ["entrar", "adentrar"],
    "To give up": ["desistir", "abandonar"],
    "To give back": ["devolver", "restituir"],
    "To take down": ["anotar", "derrubar"],
    "To get up": ["levantar", "acordar"],
    "To get down": ["descer", "abaixar"],
    "To look up": ["procurar", "pesquisar"],
    "To look down": ["olhar para baixo", "desprezar"],
    "To put away": ["guardar", "arrumar"],
    "To figure out": ["descobrir", "entender, solucionar"],
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
    const respostaUsuario = document.getElementById("campoTentativa").value.trim().toLowerCase();
    const respostasAceitas = listaTraducao[verbo].map(resposta => resposta.toLowerCase());


    if(respostaUsuario === "") {
        alert("Digite uma resposta!");
        document.getElementById("campoTentativa").focus();
        return;
    }
    
    // coletar dados do HTML
    const resultadoDiv = document.querySelector(".container__nivel__conteudo__resultados");
    const campoBotao = document.querySelector(".container__nivel__conteudo__botao");
    const resultadoTexto = document.getElementById("resultado");
    const respostasTexto = document.getElementById("respostasCorretas");

    resultadoDiv.classList.remove("invisivel");


    // Verificar se a resposta do usuário está correta
    //Acertou
    if(respostasAceitas.includes(respostaUsuario)){
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
            <a href="seletorniveis.html" class="link__menu" style="text-decoration:underline">Clique aqui para voltar ao menu principal</a>
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
    if(fase === 20){
        document.querySelector(".container__nivel").innerHTML = `
        <div class="container__nivel__conteudo__final">
        Parabéns! Você completou todas as fases!
        <br>
        <a href="seletorniveis.html" class="link__menu" style="text-decoration:underline">Clique aqui para voltar ao menu principal</a>
        </div>
        `;
        verbosDisponiveis = [...listaDeVerbos];
        phrasalVerbsDisponiveis = [...listaPhrasalVerbs];
        fase = 1;
        return;
    }

    fase++;
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