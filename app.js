
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

let verbosDisponiveis = [...listaDeVerbos];
let verboAtual = "";
let fase = 1;



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



function escolherVerboAleatorio(){
    const indice = Math.floor(Math.random() * verbosDisponiveis.length);
    const verboEscolhido = verbosDisponiveis[indice];
    verbosDisponiveis.splice(indice, 1); // Remove o verbo escolhido da lista de verbos disponíveis
    return verboEscolhido;
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
        respostasTexto.innerHTML = `Traduções aceitas: ${respostasAceitas.join(", ")}. <br>Tecle "Enter" ou clique no botão para prosseguir.`;
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
        
    }


}


function proximoVerbo(){
    fase++;
    document.getElementById("campoTentativa").value = "";
    document.getElementById("campoTentativa").focus();
    document.querySelector(".container__nivel__conteudo__resultados").classList.add("invisivel");
    startNivel1();
}