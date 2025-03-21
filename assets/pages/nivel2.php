<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    session_start();

    require __DIR__ . '/../php/config.php';


    if(!isset($_SESSION['usuario_id'])) {
        header('Location: /index.html');
        exit();
    }


    echo "<script>console.log('ID do usuário: " . $_SESSION['usuario_id'] . "');</script>";
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
                        <li>Neste modo, você deve traduzir os Phrasal Verbs que aparecerem.</li>
                        <li>Para conferir a resposta, clique no botão "Check" ou então utilize a tecla "ENTER" para agilizar.</li>
                        <li>Para começar, clique no botão abaixo:</li>
                    </ul>    
                <button onclick="iniciarNivel(`phrasal`)" class="btn__nivel" id="btn__start">Iniciar</button>
            </div>
                <div class="container__nivel__conteudo__resultados invisivel">
                    <p id="resultado"></p>
                    <p id="respostasCorretas"></p>
                </div>
        </div>

    <script src="/assets/js/app.js"></script>
</body>
</html>