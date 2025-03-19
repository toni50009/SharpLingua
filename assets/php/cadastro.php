<?php

// CADASTRAR NOVOS USUARIOS

require __DIR__ . '/config.php';

if($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $username = $_POST['username'];
    $senha = $_POST['senha'];

// VERIFICAR SE USUARIO JA EXISTE
    $verificar = "SELECT * FROM usuarios WHERE username = '$username'";
    $result = $conn->query($verificar);

    if($result->num_rows > 0) {
        echo "<script>alert('Nome de usuário já existe!');</script>";
        echo "<script>window.location.href = '/index.html';</script>";


    }else
// INSERIR NOVO USUARIO
    {
        $sql = "INSERT INTO usuarios (username,senha) VALUES ('$username','$senha')";
        if($conn->query($sql) === TRUE) {
            echo "<script>alert('Usuário cadastrado com sucesso!');</script>";
            echo "<script>window.location.href = '/index.html';</script>";
        }else{
            echo "Erro ao cadastrar usuário: " . $conn->error;
        }
    }

}

$conn->close();
?>
