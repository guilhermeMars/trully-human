<?php

    //Conectar com o BD
    $dbHost = "localhost:3307";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName = "truly-human";

    $conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
    //END

    //Testa a conexão
    if ($conn->connect_error) {
        die("Conexão falhou: " . $conn->connect_error);
    }
    //END
    
?>