
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

const listaPharsalVerbs = [
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
    "To give up",
];

const listaPharsalVerbsTraducoes = {
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
    "To give up": ["desistir", "abandonar"],
};


//Universal
let tentativas = 0;

//Nivel 1
let verbosDisponiveis = [...listaDeVerbos];
let verboAtual = "";
let fase = 1;

//Nivel 2
let phrasalVerbsDisponiveis = [...listaPharsalVerbs];
let phrasalVerbAtual = "";
let fasePhrasal = 1;



function startNivel1(){

    verboAtual = escolherVerboAleatorio();

    mensagemInicial("checarVerbo");


}


function startNivel2(){

    phrasalVerbAtual = escolherPhrasalVerbAleatorio();

    mensagemInicial("checarPhrasalVerb");


}



function escolherVerboAleatorio(){
    const indice = Math.floor(Math.random() * verbosDisponiveis.length);
    const verboEscolhido = verbosDisponiveis[indice];
    verbosDisponiveis.splice(indice, 1); // Remove o verbo escolhido da lista de verbos disponíveis
    return verboEscolhido;
}


function escolherPhrasalVerbAleatorio(){
    const indice = Math.floor(Math.random() * phrasalVerbsDisponiveis.length);
    const phrasalVerbEscolhido = phrasalVerbsDisponiveis[indice];
    phrasalVerbsDisponiveis.splice(indice, 1); // Remove o verbo escolhido da lista de verbos disponíveis
    return phrasalVerbEscolhido;
}


function checarVerbo(){
    const respostaUsuario = document.getElementById("campoTentativa").value.trim().toLowerCase();
    const respostasAceitas = listaTraducoesVerbos[verboAtual].map(resposta => resposta.toLowerCase());
    
    // coletar dados do HTML
    const resultadoDiv = document.querySelector(".container__nivel__conteudo__resultados");
    const campoBotao = document.querySelector(".container__nivel__conteudo__botao");
    const resultadoTexto = document.getElementById("resultado");
    const respostasTexto = document.getElementById("respostasCorretas");

    // Verificar se a resposta do usuário está correta
    resultadoDiv.classList.remove("invisivel");

    if(respostasAceitas.includes(respostaUsuario)){
        resultadoTexto.innerHTML = "Correto!";
        respostasTexto.innerHTML = `Traduções aceitas: ${respostasAceitas.join(", ")}. 
        <br>
        <br>
        Tecle "Enter" ou clique no botão para prosseguir.`;
        resultadoDiv.classList.remove("erro");
        campoBotao.innerHTML = `
        <button onclick="proximoVerbo()" class="btn__proximoVerbo">Próximo Verbo!</button>
        `;
        //otimizar com enter
        document.getElementById("campoTentativa").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
               proximoVerbo();
            }
        });

    } else {
        resultadoTexto.innerText = "Incorreto!";
        resultadoDiv.classList.add("erro");
        respostasTexto.textContent = "";
        document.getElementById("campoTentativa").value = "";
    }

}

function checarPhrasalVerb(){
    const respostaUsuario = document.getElementById("campoTentativa").value.trim().toLowerCase();
    const respostasAceitas = listaPharsalVerbsTraducoes[phrasalVerbAtual].map(resposta => resposta.toLowerCase());
    
    // coletar dados do HTML
    const resultadoDiv = document.querySelector(".container__nivel__conteudo__resultados");
    const campoBotao = document.querySelector(".container__nivel__conteudo__botao");
    const resultadoTexto = document.getElementById("resultado");
    const respostasTexto = document.getElementById("respostasCorretas");

    // Verificar se a resposta do usuário está correta
    resultadoDiv.classList.remove("invisivel");

    if(respostasAceitas.includes(respostaUsuario)){
        resultadoTexto.innerHTML = "Correto!";
        respostasTexto.innerHTML = `Traduções aceitas: ${respostasAceitas.join(", ")}. 
        <br>
        <br>
        Tecle "Enter" ou clique no botão para prosseguir.`;
        resultadoDiv.classList.remove("erro");
        campoBotao.innerHTML = `
        <button onclick="proximoVerbo()" class="btn__proximoVerbo">Próximo Phrasal Verb!</button>
        `;
        //otimizar com enter
        document.getElementById("campoTentativa").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
               proximoPhrasalVerb();
            }
        });

    } else {
        resultadoTexto.innerText = "Incorreto!";
        resultadoDiv.classList.add("erro");
        respostasTexto.textContent = "";
        document.getElementById("campoTentativa").value = "";
    }


}


function proximoVerbo(){
    if(fase === 20){
        document.querySelector(".container__nivel").innerHTML = `
        <div class="container__nivel__conteudo__final">
        Parabéns! Você completou todas as fases!
        <br>
        <a href="seletorniveis.html" class="link__menu" style="text-decoration:underline">Clique aqui para voltar ao menu principal</a>
        </div>
        `;
        verbosDisponiveis = [...listaDeVerbos];
        fase = 1;
        return;
    }

    fase++;
    document.getElementById("campoTentativa").value = "";
    document.getElementById("campoTentativa").focus();
    document.querySelector(".container__nivel__conteudo__resultados").classList.add("invisivel");
    startNivel1();
}



function proximoPhrasalVerb(){
    if(fase === 20){
        document.querySelector(".container__nivel").innerHTML = `
        <div class="container__nivel__conteudo__final">
        Parabéns! Você completou todas as fases!
        <br>
        <a href="seletorniveis.html" class="link__menu" style="text-decoration:underline">Clique aqui para voltar ao menu principal</a>
        </div>
        `;
        phrasalVerbsDisponiveis = [...listaPharsalVerbs];
        fase = 1;
        return;
    }

    fase++;
    document.getElementById("campoTentativa").value = "";
    document.getElementById("campoTentativa").focus();
    document.querySelector(".container__nivel__conteudo__resultados").classList.add("invisivel");
    startNivel2();
}


function mensagemInicial(target){

    document.querySelector('.container__nivel__conteudo').innerHTML = `
    <h2>Fase ${fase}/20</h2>
    <br>
    <h1 class="destaque">${phrasalVerbAtual}</h1>
        <section class="container__nivel__conteudo__inputs">
            <p>Tradução: </p> 
            <input type="text" id="campoTentativa" placeholder="Digite a resposta">
        </section>
        <br>
        <br>
        <br>
        <div class="container__nivel__conteudo__botao">
        <button onclick="${target}()" class="btn__checarVerbo">Check</button>
        </div>
        `;

        document.getElementById("campoTentativa").focus();

        document.getElementById("campoTentativa").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                `${target}()`;
            }
        });
}