<?php

session_start();

// VALIDAR LOGIN E REDIRECIONAR PARA PAGINA DE USUARIO
require __DIR__ . '/config.php';

if($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = $_POST['username'];
    $senha = $_POST['senha'];

     // VERIFICAR SE CAMPO ESTA VAZIO
     if($username == " " || empty($username) || $senha == " " || empty($senha)) {
        echo "<script>alert('Preencha todos os campos!');</script>";
        echo "<script>window.location.href = '/index.html';</script>";
       exit();
    }


    // BUSCAR USUARIOS
    $sql = "SELECT * FROM usuarios WHERE username = ? AND senha = ?";
    $stmt = $conn->prepare($sql);

        //VERIFICAR CONEXAO
        if($stmt == FALSE) {
            die("Erro ao verificar usuário: " . $conn->error);
        }

        
    $stmt->bind_param("ss", $username, $senha);
    $stmt->execute();
    $stmt->store_result();

    if($stmt->num_rows > 0) {

        $stmt->bind_result($usuario_id);
        $stmt->fetch();

        $_SESSION['usuario_id'] = $usuario_id;

        echo "<script>alert('Login efetuado com sucesso!');</script>";
        echo "<script>window.location.href = '/assets/pages/seletorniveis.html';</script>";
        $stmt->close();
        $conn->close();
        exit();
    }else{
        echo "<script>alert('Usuário ou senha incorretos!');</script>";
        echo "<script>window.location.href = '/index.html';</script>";
        $stmt->close();
        exit();
    }

    $stmt->close();
}

$conn->close();
?>