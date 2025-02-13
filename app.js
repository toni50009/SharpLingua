



function startNivel1(){
    let fase = 1;
    document.querySelector('h2').innerHTML = `Fase ${fase}/10`;
    document.querySelector('.container__nivel__conteudo').innerHTML = `
    <h2>To Be</h2>
    <h3>Nível 1/10</h3>
    <p>Tradução: </p> <input type="text" id="resposta" placeholder="Digite a resposta">
 `;
}