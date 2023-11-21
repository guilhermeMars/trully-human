<?php
    require_once('users_config.php');
    require_once('users.php');

    //Verificar se o botão salvar foi pressionado
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['salvar'])) {

        //Coletar os dados do formulário
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $telefone = $_POST['telefone'];
        $tipo_usuario = $_POST['tipo_usuario'];

        //Inserir dados no BD
        $sql_insert = "INSERT INTO users (nome, email, telefone, tipo_usuario) VALUES ('$nome', '$email', '$telefone', '$tipo_usuario')";

        //Inserir e verificar se está OK
        if ($conn->query($sql_insert) === FALSE) {
            echo "Erro ao inserir registro:";
        }

        //Redirecionar em 1 seg
        header("refresh:1;url=users.php");
        exit();
    }

    //END
?>