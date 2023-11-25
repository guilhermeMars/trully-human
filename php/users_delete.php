<?php
    require_once('users_config.php');
    
    // Testa a conexão
    if ($conn->connect_error) {
        die("Conexão falhou: " . $conn->connect_error);
    }

    // Verifica se o botão de exclusão foi pressionado
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['excluir'])) {

        // Coleta o ID
        $id = $_POST['id'];

        //Exclui do BD
        $sql_delete = "DELETE FROM users WHERE id = $id";

        //Check se foi excluído
        if ($conn->query($sql_delete) === TRUE) {
            echo "Registro excluído com sucesso!";
            //Redirecionar em 1 seg
            header("refresh:1;url=users.php");
            exit();
            
        } else {
            echo "Erro ao excluir registro";
        }
        $conn->close();
    }
?>