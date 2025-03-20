<?php

// CADASTRAR NOVOS USUARIOS

require __DIR__ . '/config.php';

if($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $username = $_POST['new_username'];
    $senha = $_POST['new_senha'];

 // VERIFICAR SE CAMPO ESTA VAZIO
     if($username == " " || empty($username) || $senha == " " || empty($senha)) {
          echo "<script>alert('Preencha todos os campos!');</script>";
          echo "<script>window.location.href = '/index.html';</script>";
         exit();
      }



// VERIFICAR SE USUARIO JA EXISTE
    $verificar = "SELECT * FROM usuarios WHERE username = '$username'";
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
        echo "<script>window.location.href = '/index.html';</script>";
        $stmt->close();
        exit();
    }
    // INSERIR NOVO USUARIO
    else{

        $sql = "INSERT INTO usuarios (username,senha) VALUES ('$username','$senha')";
        if($stmt->execute()) {
            echo "<script>alert('Usuário cadastrado com sucesso!');</script>";
            echo "<script>window.location.href = '/index.html';</script>";
            $stmt->close();
            $conn->close();
            exit();
        }else{
            echo "Erro ao cadastrar usuário: " . $conn->error;
        }
        $stmt->close();
    }

}

$conn->close();
?>
