document.addEventListener("DOMContentLoaded", function() {
    // Criação do cabeçalho
    var header = document.createElement("header");
    header.innerHTML = `
    <div id="header">
        <a href="https://guilhermemars.github.io/trully-human/" id="logo_header">
            <img src="./assets/Logo Accenture.png" alt="Logo Accenture">
        </a>
        <form id="barra_pesquisa">
            <button><img src="./assets/lupa.png" alt="Lupa"></button>
            <input type="text" name="barra_pesquisa" id="pesquisa_texto" value="Pesquisa">
        </form>
        <a href="login.html"><img src="./assets/user_logo.png" alt="login" id="user_header"></a>
    </div>
    `;
    document.body.prepend(header);

    // Criação do rodapé
    var footer = document.createElement("footer");
    footer.innerHTML = `
    <footer id="footer">
        <div class="footer_menu">
            <h2>Serviços</h2>
            <div class="sub-menu_servicos" id="menu_servicos_footer">
                <p><a target="_blank" href="https://www.accenture.com/br-pt">Sobre a Accenture</a></p>
                <div target="_blank" id="linha_footer"></div>
                <p><a target="_blank" href="https://www.accenture.com/br-pt/support/terms-of-use">Termos de uso</a></p>
                <div id="linha_footer"></div>
                <p><a target="_blank" href="https://www.accenture.com/br-pt/about/privacy-policy">Política de Privacidade</a></p>
                <div id="linha_footer"></div>
                <p><a target="_blank" href="https://github.com/guilhermeMars/trully-human">A iniciativa</a></p>
            </div>
        </div>
        <div class="footer_menu">
            <h2>Contato</h2>
            <div class="sub-menu_servicos" id="menu_contato_footer">
                <p>Atendimento - (19) 99900-7601</p>
                <div id="linha_footer"></div>
                <p>Email - contato@accenture.com.br</p>
                <div id="linha_footer"></div>
                <p>FAQ - (19) 99900-7601</p>
            </div>
        </div>
    </footer>
    </body>
    `;
    document.body.appendChild(footer);
});