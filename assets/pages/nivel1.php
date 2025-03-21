<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);


    include_once '/assets/php/config.php';


    session_start();
    if(!isset($_SESSION['usuario_id'])) {
        header('Location: /index.html');
        exit();
    }



?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <title>SharpLingua</title>
</head>
<body>
    
    <div class="container__nivel">
        <div class="container__voltar">
            <a href="/assets/pages/seletorniveis.html" class="btnVoltar">
                <i class="fa fa-arrow-left" onclick="voltar(event,'/assets/pages/seletorniveis.html')"></i>
            </a>
        </div>
            <div class="container__nivel__conteudo">
                <h2>Tutorial</h2>
                    <ul class="container__nivel__conteudo__lista">
                        <li>Neste modo, você deve traduzir o verbo apresentado digitando no campo.</li>
                        <li>Para conferir a resposta, clique no botão "Check" ou então utilize a tecla "ENTER" para agilizar.</li>
                        <li>Note que: um verbo pode ter mais de uma tradução possível. Digite apenas a tradução que achar melhor.</li>
                        <li>Não será considerado contexto, somente a tradução do verbo.</li>
                        <li>Para começar, clique no botão abaixo:</li>
                    </ul>    
                <button onclick="iniciarNivel(`verbo`)" class="btn__nivel" id="btn__start">Iniciar</button>
            </div>
                <div class="container__nivel__conteudo__resultados invisivel">
                    <p id="resultado"></p>
                    <p id="respostasCorretas"></p>
                </div>
    </div>

    <script src="/assets/js/app.js"></script>
</body>
</html>