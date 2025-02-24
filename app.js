
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
    "To back up",
    "To break down",
    "To bring up",
    "To call off",
    "To carry out",
    "To come across",
    "To come up with",
    "To slow down",
    "To speed up",
    "To cut off",
    "To drop off", 
    "To figure out",
    "To get along",
    "To get away",
    "To get over",
    "To go on",
    "To hold on",
    "To keep up",
    "To look after",
    "To pack up",
];

const listaPharsalVerbsTraducoes = {
    "To back up": ["dar ré", "apoiar", "suportar"],
    "To break down": ["quebrar", "falhar", "parar de funcionar"],
    "To bring up": ["mencionar", "criar", "educar"],
    "To call off": ["cancelar", "desmarcar"],
    "To carry out": ["realizar", "executar"],
    "To come across": ["encontrar", "deparar-se com"],
    "To come up with": ["surgir com", "inventar", "sugerir"],
    "To slow down": ["desacelerar", "diminuir a velocidade"],
    "To speed up": ["acelerar", "aumentar a velocidade"],
    "To cut off": ["cortar", "interromper"],
    "To drop off": ["deixar", "largar"],
    "To figure out": ["descobrir", "entender"],
    "To get along": ["se dar bem", "relacionar-se bem"],
    "To get away": ["escapar", "sair"],
    "To get over": ["superar", "recuperar-se"],
    "To go on": ["continuar", "prosseguir"],
    "To hold on": ["esperar", "aguardar"],
    "To keep up": ["manter", "continuar"],
    "To look after": ["cuidar", "tomar conta"], 
    "To pack up": ["empacotar", "arrumar"],
};



//Nivel 1
let verbosDisponiveis = [...listaDeVerbos];
let verboAtual = "";
let fase = 1;

//Nivel 2
let phrasalVerbsDisponiveis = [...listaPharsalVerbs];
let phrasalVerbAtual = "";
let fasePhrasal = 1;



function startNivel1(){
    if(verbosDisponiveis.length === 0){
        alert('Parabéns, você descobriu todos os verbos!');
        verbosDisponiveis = [...listaDeVerbos];
        return;
    }

    verboAtual = escolherVerboAleatorio();

    document.querySelector('.container__nivel__conteudo').innerHTML = `
    <h2>Fase ${fase}/20</h2>
    <br>
    <h1 class="destaque">${verboAtual}</h1>
        <section class="container__nivel__conteudo__inputs">
            <p>Tradução: </p> 
            <input type="text" id="campoTentativa" placeholder="Digite a resposta">
        </section>
        <br>
        <br>
        <br>
        <div class="container__nivel__conteudo__botao">
        <button onclick="checarVerbo()" class="btn__checarVerbo">Check</button>
        </div>
        `;

    document.getElementById("campoTentativa").focus();

    // Para chamar o botão apertando a tecla Enter
    document.getElementById("campoTentativa").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checarVerbo();
        }
    });

}


function startNivel2(){
    if(phrasalVerbsDisponiveis.length === 0){
        alert('Parabéns, você descobriu todos os Phrasal Verbs!');
        phrasalVerbsDisponiveis = [...listaPharsalVerbs];
        return;
    }

    phrasalVerbAtual = escolherPhrasalVerbAleatorio();

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
        <button onclick="checarPhrasalVerb()" class="btn__checarVerbo">Check</button>
        </div>
        `;

    document.getElementById("campoTentativa").focus();

    // Para chamar o botão apertando a tecla Enter
    document.getElementById("campoTentativa").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checarPhrasalVerb();
        }
    });

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
