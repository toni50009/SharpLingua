<?php

// CONECTAR COM O BANCO DE DADOS

$servername = "localhost";
$username = "u904092573_toni5000";
$password = "Dementador@2286";
$database = "u904092573_Usuarios";

// Inicializar Conexão
$conn = new mysqli($servername, $username, $password, $database);


// Verificar Conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>