<?php
// VALIDAR LOGIN E REDIRECIONAR PARA PAGINA DE USUARIO


require __DIR__ . '/config.php';

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $senha = $_POST['senha'];

    // BUSCAR USUARIOS
    $sql = "SELECT * FROM usuarios WHERE username = '$username' AND senha = '$senha'";
    $result = $conn->query($sql);

    if($result->num_rows > 0) {
        echo "<script>alert('Login efetuado com sucesso!');</script>";
        "<script>window.location.href = '../usuario.html';</script>";
    }else{
        echo "<script>alert('Usuário ou senha incorretos!');</script>";
        "<script>window.location.href = '../index.html';</script>";
    }
    // VERIFICAR SE  USUARIO JA EXISTA
    $verificar = "SELECT * FROM usuarios WHERE username = '$username'";
    $result = $conn->query($verificar);

    if($result->num_rows > 0) {
        echo "<script>alert('Nome de usuário já existe!');</script>";
         "<script>window.location.href = '../index.html';</script>";
    }else{
        echo "<script>alert('Usuário ou senha incorretos!');</script>";
        "<script>window.location.href = '../index.html';</script>";
    }

}

$conn->close();
?>