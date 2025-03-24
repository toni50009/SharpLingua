<?php

// CADASTRAR NOVOS USUARIOS

require __DIR__ . '/config.php';

if($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $nome = $_POST['new_nome'];
    $username = $_POST['new_username'];
    $senha = $_POST['new_senha'];

 // VERIFICAR SE CAMPO ESTA VAZIO
     if( empty($nome) || $nome == " " || $username == " " || empty($username) || $senha == " " || empty($senha)) {
          echo "<script>alert('Preencha todos os campos!');</script>";
          echo "<script>window.location.href = '/assets/pages/cadastro.html';</script>";
         exit();
      }



// VERIFICAR SE USUARIO JA EXISTE
    $verificar = "SELECT username FROM usuarios WHERE username = ?";
    $stmt = $conn->prepare($verificar);

    //VERIFICAR CONEXAO
    if($stmt == FALSE) {
        die("Erro ao verificar usuário: " . $conn->error);
    }

    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if($stmt->num_rows > 0) {
        echo "<script>alert('Nome de usuário já existe!');</script>";
        echo "<script>window.location.href = '/assets/pages/cadastro.html';</script>";
        $stmt->close();
        exit();
    }

    $stmt->close();


    //INSERIR NOVO USUARIO
    $sql = "INSERT INTO usuarios (nome,username,senha) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);

    if(!$stmt) {
        die("Erro ao inserir usuário: " . $conn->error);
    }

    $stmt->bind_param("sss", $nome, $username,$senha);
    if($stmt->execute()){
        echo "<script>alert('Usuário cadastrado com sucesso!');</script>";
        echo "<script>window.location.href = '/index.html';</script>";
        $stmt->close();
        $conn->close();
        exit();
    }else{
        echo "<script>alert('Erro ao cadastrar usuário!');</script>" . $conn->error;
        echo "<script>window.location.href = '/assets/pages/cadastro.html';</script>";
    }

    $stmt->close();
}


$conn->close();
?>