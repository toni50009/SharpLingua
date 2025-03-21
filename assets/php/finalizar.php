<?php
session_start();


// UDPATE NO BANCO DE DADOS PARA SALVAR PONTUACAO
require __DIR__ . '/config.php';

if($conn->connect_error) {
    die("Erro ao conectar com o banco de dados: " . $conn->connect_error);
}

$id = $_SESSION['usuario_id'];
$conn->query("UPDATE usuarios SET nivel1 = 1 WHERE id = $id");
$conn->close();

?>


<!DOCTYPE html>
<html>
<head>
    <title>Parabéns!</title>
    <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
    <div class="container__nivel__conteudo__final">
        <h2>Parabéns!</h2>
        <p>Você completou todos os níveis e ganhou 1 ponto!</p>
        <br>
        <a href="/assets/pages/seletorniveis.html" class="link__menu" style="text-decoration:underline">
            Voltar ao menu principal
        </a>
    </div>
</body>
</html>