



function startNivel1(){
    let fase = 1;
    document.querySelector('h2').innerHTML = `Fase ${fase}/10`;
    document.querySelector('.container__nivel__conteudo').innerHTML = `
    <p>Verbo: </p><h2>To Be</h2>
    <p>Tradução: </p> <input type="text" id="resposta" placeholder="Digite a resposta">
 `;
}