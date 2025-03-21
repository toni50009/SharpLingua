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


    $stmt = $conn->prepare("SELECT nome FROM usuarios WHERE id = ?");
    $stmt->bind_param("i", $_SESSION['usuario_id']);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($nome);
    $stmt->fetch();

    $stmt->close();

    $stmt = $conn->prepare("SELECT pontos FROM usuarios WHERE id = ?");
    $stmt->bind_param("i", $_SESSION['usuario_id']);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($pontos);
    $stmt->fetch();
    $stmt->close();

    $conn->close();


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
    
    <div class="container">
        <div class="container__voltar">
            <a href="/index.html" class="btnVoltar">
                <i class="fa fa-arrow-left" onclick="voltar(event,'/index.html')"></i>
            </a>
        </div>
            <div class="container__titulo">
                <h1>Bem-vindo <?= htmlspecialchars($nome) ?> </span></h1>
                <p><?= $pontos ?> pontos</p>
                <p>Como quer se desafiar hoje?</p>
            </div>
                <div class="container__conteudo">
                    <div class="nivel1">
                        <button class="btnOpcao"><a href="/assets/pages/nivel1.php" class="btnOpcaoTexto">Traduza o verbo</a></button>
                    </div>
                    <div class="nivel2">
                        <button class="btnOpcao"><a href="nivel2.html" class="btnOpcaoTexto">Phrasal Verbs</a></button>
                    </div>
                </div>
    </div>
    <script src="/assets/js/app.js"></script>
</body>
</html>