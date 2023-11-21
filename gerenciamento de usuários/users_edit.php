<?php
require_once('users_config.php');

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['atualizar'])) {
    $id = $_POST['idUpdate'];
    $nome = $_POST['nomeUpdate'];
    $email = $_POST['emailUpdate'];
    $telefone = $_POST['telefoneUpdate'];
    $tipo_usuario = $_POST['tipo_usuarioUpdate'];

    $sql_update = "UPDATE users SET nome='$nome', email='$email', telefone='$telefone', tipo_usuario='$tipo_usuario' WHERE id='$id'";
    if ($conn->query($sql_update) === TRUE) {
        header("Location: users.php");
        exit();
    } else {
        echo "Erro ao atualizar os dados: " . $conn->error; // Adicionado para exibir o erro
    }
}
?>