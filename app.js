const listaDeVerbos = ["To be", "To have", "To do", "To say", "To go", "To get", "To make", "To know", "To think", "To take"];
const litaTraducoesVerbos = {
    "To be": ["ser", "estar"],
    "To have": ["ter", "possuir"],
    "To do": ["fazer", "executar"],
    "To say": ["dizer", "falar"],
    "To go": ["ir"],
    "To get": ["obter", "conseguir", "receber"],
    "To make": ["fazer", "criar", "produzir"],
    "To know": ["saber", "conhecer"],
    "To think": ["pensar", "achar"],
    "To take": ["pegar", "levar"]
};

let verbosDisponiveis = [...listaDeVerbos];




function startNivel1(){
    let fase = 1;
    document.querySelector('.container__nivel__conteudo').innerHTML = `
    <h2>Fase ${fase}/10</h2>
    <h1 class="destaque">To Be</h1>
    <p>Tradução: </p> 
    <input type="text" id="resposta" placeholder="Digite a resposta">
    <br>
    <br>
    <br>
    <button onclick="checarVerbo()" class="btn__checarVerbo">Check</button>
    `;
}