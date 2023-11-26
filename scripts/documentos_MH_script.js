let editando = false;
let materialParaEditar = null;

function mostrarModal() {
const overlay = document.getElementById("paginadeCriação").style.display = "flex";
overlay.style.display = "block";

const materials = document.querySelectorAll(".material");

if (editando) {
const opcaoAtual = document.querySelector("#executar-button .button-inner-executar").classList[1];

}

const fundoBloqueio = document.getElementById("fundoBloqueio");
fundoBloqueio.style.display = "block";
}

function criarNovoMaterial() {
    fecharModal();

    const titulo = document.querySelector("#titulo")
    const descricao = document.querySelector("#descricao")
    
    const novoMaterial = document.createElement("div");
    novoMaterial.className = "material";

    const materialContainer = document.querySelector(".material-container");
    materialContainer.appendChild(novoMaterial);

    const novaImagem = document.createElement("img");
    novaImagem.src = "../assets/anex.png";
    novaImagem.alt = "Novo Material";
    novaImagem.onclick = function () {
        editarImagem(this);
    };
    novoMaterial.appendChild(novaImagem);

    const novoTitulo = document.createElement("h2");
    novoTitulo.textContent = titulo.value;
    novoTitulo.onclick = function () {
        editarNome(this);
    };
    novoMaterial.appendChild(novoTitulo);

    const novaDescricao = document.createElement("p");
    novaDescricao.textContent = descricao.value;
    novaDescricao.onclick = function () {
        editarDescricao(this);
    };
    novoMaterial.appendChild(novaDescricao);
}

function fecharModal() {
    const overlay = document.getElementById("paginadeCriação");
    overlay.style.display = "none";

    const fundoBloqueio = document.getElementById("fundoBloqueio");
    fundoBloqueio.style.display = "none";
}

document.getElementById("criarButton").addEventListener("click", criarNovoMaterial);
document.getElementById("voltarButton").addEventListener("click", fecharModal);

function editarImagem(imagem) {
    if (editando) {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.style.display = "none";
        input.onchange = function () {
            carregarImagem(this, imagem);
        };
        input.click();
    }
}
