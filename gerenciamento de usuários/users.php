<?php
    //Requerimento de informações de outras operações.
    require_once('users_config.php');
    require_once('users_create.php');
    require_once('users_delete.php');
    require_once('users_edit.php');

    //Carrega dados do BD na página
    $sql = "SELECT id, nome, email, telefone, tipo_usuario FROM users";
    $result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <!-- Cabeçalho e metadados -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,200;1,800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="users_main.css">
    <link rel="stylesheet" href="users_button.css">
    <link rel="stylesheet" href="users_records.css">
    <link rel="stylesheet" href="users_modal.css">
    <script src="main.js" defer></script>
    <title>Gerênciamento de Recursos</title>
</head>
<body>
    <!-- Estrutura HTML -->
    <header>
        <h1 class="header-title">Gerênciamento de Recursos</h1>
    </header>
    <main>
        <button type="button" class="button purple mobile" id="cadastrarCliente">Cadastrar Recurso</button>
        <table class="records">
            <thead>
                <tr data-id="<?php echo $row["id"]; ?>">
                    <th>ID</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th>Tipo de Usuário</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    //Loop sobre os resultados do banco de dados e exibe na tabela
                    if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            echo "<tr>";
                            echo "<td>" . $row["id"] . "</td>";
                            echo "<td>" . $row["nome"] . "</td>";
                            echo "<td>" . $row["email"] . "</td>";
                            echo "<td>" . $row["telefone"] . "</td>";
                            echo "<td>" . $row["tipo_usuario"] . "</td>";
                            echo "<td class=acao>";
                            //Botão Editar
                            echo '<form action="users_edit.php" method="POST">';
                            echo '<button type="button" class="button green editar-btn">Editar</button>';
                            echo '</form>';
                            //Botão Excluir
                            echo '<form action="users_delete.php" method="POST">';
                            echo '<input type="hidden" name="id" value="' . $row["id"] . '">';
                            echo '<button type="submit" class="button red" name="excluir">Excluir</button>';
                            echo '</form>';
                            echo "</td>";
                            echo "</tr>";
                        }
                    } else {
                        echo "<tr><td colspan='5'>Nenhum resultado encontrado</td></tr>";
                    }
                ?>
                <script>
                    // JavaScript para interação com os botões de edição
                    const editButtons = document.querySelectorAll('.editar-btn');

                    // Captura e manipulação dos dados para preencher o formulário de atualização
                    editButtons.forEach(button => {
                        button.addEventListener('click', () => {
                            const row = button.closest('tr');
                            const id = row.cells[0].innerText;
                            const nome = row.cells[1].innerText;
                            const email = row.cells[2].innerText;
                            const telefone = row.cells[3].innerText;
                            const tipo_usuario = row.cells[4].innerText;

                            document.querySelector('input[name="idUpdate"]').value = id;
                            document.querySelector('input[name="nomeUpdate"]').value = nome;
                            document.querySelector('input[name="emailUpdate"]').value = email;
                            document.querySelector('input[name="telefoneUpdate"]').value = telefone;

                            const select = document.querySelector('select[name="tipo_usuarioUpdate"]');
                            const options = select.options;
                            for (let i = 0; i < options.length; i++) {
                                if (options[i].text === tipo_usuario) {
                                    select.selectedIndex = i;
                                    break;
                                }
                            }
                            // Abrir o modal
                            openUpdate();
                        });
                    });
                </script>
            </tbody>
        </table>
        <!-- Modal de Adicionar Recurso -->
        <div class="modal" id="modal">
            <div class="modal-content">
                <header class="modal-header">
                    <h2>Novo Recurso</h2>
                    <span class="modal-close" id="modalClose">&#10006;</span>
                </header>
                <form action="users.php" method="POST" class="modal-form" name="addResourceForm">
                    <input type="text" name="nome" class="modal-field" placeholder="Nome Completo">
                    <input type="email" name="email" class="modal-field" placeholder="E-mail">
                    <input type="text" name="telefone" class="modal-field" placeholder="Telefone ">
                    <select id="tipo_usuario" name="tipo_usuario" class="modal-field" placeholder="Tipo de Usuário">
                        <option value="usuario">Usuário</option>
                        <option value="lider">Líder</option>
                        <option value="administrador">Administrador</option>
                    </select>
                    <input type="hidden" name="id">
                    <footer class="modal-footer">
                        <button type="submit" class="button green" name="salvar">Salvar</button>
                        <button class="button purple">Cancelar</button>
                    </footer>
                </form>
            </div>
        </div>
        <!-- Modal de Atualizar Recurso -->
        <div class="modal" id="Update">
            <div class="modal-content">
                <header class="modal-header">
                    <h2>Atualizar Recurso</h2>
                    <span class="modal-close" id="closeUpdate">&#10006;</span>
                </header>
                <form action="users.php" method="POST" class="modal-form" name="updateResourceForm">
                    <input type="text" name="idUpdate" class="modal-field" placeholder="ID" readonly style="pointer-events: none">
                    <input type="text" name="nomeUpdate" class="modal-field" placeholder="Nome Completo">
                    <input type="email" name="emailUpdate" class="modal-field" placeholder="E-mail">
                    <input type="text" name="telefoneUpdate" class="modal-field" placeholder="Telefone ">
                    <select id="tipo_usuario" name="tipo_usuarioUpdate" class="modal-field" placeholder="Tipo de Usuário">
                        <option value="usuario">Usuário</option>
                        <option value="lider">Líder</option>
                        <option value="administrador">Administrador</option>
                    </select>
                    <input type="hidden" name="idUpdate">
                    <footer class="modal-footer">
                        <button type="submit" class="button green" name="atualizar">Atualizar</button>
                        <button class="button purple" id="cancelUpdate">Cancelar</button>
                    </footer>
                </form>
            </div>
        </div>
    </main>
    <footer>

    </footer>
</body>
</html>