<?php
require_once('users_config.php');

// Verificar se o botão salvar foi pressionado
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['atualizar'])) {

    // Coletar os dados do formulário
    $id = $_POST['idUpdate'];
    $nome = $_POST['nomeUpdate'];
    $email = $_POST['emailUpdate'];
    $telefone = $_POST['telefoneUpdate'];
    $tipo_usuario = $_POST['tipo_usuarioUpdate'];

    // Preparar e executar a consulta de atualização
    $sql_update = "UPDATE users SET nome = ?, email = ?, telefone = ?, tipo_usuario = ? WHERE id = ?";
    $stmt = $conn->prepare($sql_update);

    if ($stmt) {
        $stmt->bind_param("ssssi", $nome, $email, $telefone, $tipo_usuario, $id);
        $stmt->execute();

        if ($stmt->errno === 0) {
            echo "Registro atualizado com sucesso!";
        } else {
            echo "Erro ao atualizar registro: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Erro na preparação da consulta: " . $conn->error;
    }

    //Redirecionar em 1 segundo
    header("refresh:1;url=users.php");
    exit();
}
?>
