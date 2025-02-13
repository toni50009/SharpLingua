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
<<<<<<< HEAD
    <h2>Fase ${fase}/10</h2>
    <h1 class="destaque">To Be</h1>
    <p>Tradução: </p> 
    <input type="text" id="resposta" placeholder="Digite a resposta">
    <br>
    <br>
    <br>
    <button onclick="checarVerbo()" class="btn__checarVerbo">Check</button>
    `;
=======
    <h2>To Be</h2>
    <h3>Nível 1/10</h3>
    <p>Tradução: </p> <input type="text" id="resposta" placeholder="Digite a resposta">
 `;
>>>>>>> b463ab10b86f40d281d683659b63af95547d3330
}