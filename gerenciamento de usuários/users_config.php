<?php

    $dbHost = 'localhost:3306';
    $dbUsername = 'root';
    $dbPassword = '5036';
    $dbName = 'users';

    $conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

    if ($conn->connect_error) {
        die("Erro na conexão: " . $conn->connect_error);
    }
    
?>