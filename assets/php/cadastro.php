<?php

// CADASTRAR NOVOS USUARIOS

require __DIR__ . '/config.php';

if($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $username = $_POST['new_username'];
    $senha = $_POST['new_senha'];

 // VERIFICAR SE CAMPO ESTA VAZIO
     if($username == " " || empty($username) || $senha == " " || empty($senha)) {
          echo "<script>alert('Preencha todos os campos!');</script>";
          echo "<script>window.location.href = '/assets/pages/cadastro.html';</script>";
         exit();
      }



// VERIFICAR SE USUARIO JA EXISTE
    $verificar = "SELECT * FROM usuarios WHERE username = ?";
    $stmt = $conn->prepare($verificar);

    //VERIFICAR CONEXAO
    if($stmt == FALSE) {
        die("Erro ao verificar usuário: " . $conn->error);
    }

    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();


    if($result->num_rows > 0) {
        echo "<script>alert('Nome de usuário já existe!');</script>";
        echo "<script>window.location.href = '/assets/pages/cadastro.html';</script>";
        $stmt->close();
        exit();
    }

    $stmt->close();


    //INSERIR NOVO USUARIO
    $sql = "INSERT INTO usuarios (username,senha) VALUES ('?,?')";
    $stmt = $conn->prepare($sql);

    if(!$stmt) {
        die("Erro ao inserir usuário: " . $conn->error);
    }

    $stmt->bind_param("ss", $username, $senha);
    if($stmt->execute()){
        echo "<script>alert('Usuário cadastrado com sucesso!');</script>";
        echo "<script>window.location.href = '/index.html';</script>";
        $stmt->close();
        $conn->close();
        exit();
    }else{
        echo "<script>alert('Erro ao cadastrar usuário!');</script>";
        echo "<script>window.location.href = '/assets/pages/cadastro.html';</script>";
    }

    $stmt->close();
}


$conn->close();


?>