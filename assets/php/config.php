<?php

// CONECTAR COM O BANCO DE DADOS

$servername = "localhost";
$username = "root";
$password = "";
$database = "u904092573_Usuarios";

// Inicializar Conexão
$conn = new mysqli($servername, $username, $password, $database);


// Verificar Conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>