let editando = false;
let materialParaEditar = null;



function mostrarModal() {
const overlay = document.getElementById("paginaSobreposta");
overlay.style.display = "block";

const fundoBloqueio = document.getElementById("fundoBloqueio");
fundoBloqueio.style.display = "block";
}

function mostrarModal2() {
const overlay2 = document.getElementById("paginadeCriação").style.display = "flex";
overlay2.style.display = "block";

const materials = document.querySelectorAll(".material");

if (editando) {
const opcaoAtual = document.querySelector("#executar-button .button-inner-executar").classList[1];

if (opcaoAtual === "excluir") {
    materials.forEach(material => {
        marcarParaExclusao(material);
    });
}
}

const fundoBloqueio = document.getElementById("fundoBloqueio");
fundoBloqueio.style.display = "block";
}

function fecharModal2(){
    const overlay2 = document.getElementById("paginadeCriação");
    overlay2.style.display = "none";

    const fundoBloqueio = document.getElementById("fundoBloqueio");
    fundoBloqueio.style.display = "none";
}

function fecharModal() {
    const overlay = document.getElementById("paginaSobreposta");
    overlay.style.display = "none";

    const fundoBloqueio = document.getElementById("fundoBloqueio");
    fundoBloqueio.style.display = "none";
}

function marcarParaExclusao(material) {
    const opcaoAtual = document.querySelector("#executar-button .button-inner-executar").classList[1];
    const editarMaterialBtn = document.getElementById("editarMaterial");

    if (opcaoAtual === "excluir" && !editarMaterialBtn.classList.contains("marcar-para-exclusao")) {
        material.classList.toggle("selecionado-para-exclusao");
    } else {
        const materiais = document.querySelectorAll(".material");
        materiais.forEach(mat => {
            mat.classList.remove("selecionado-para-exclusao");
        });
    }
}

document.getElementById("editarMaterial").addEventListener("click", function (event) {
    this.classList.add("marcar-para-exclusao");

    const criarMaterialBtn = document.getElementById("criarMaterial");
    criarMaterialBtn.classList.remove("marcar-para-exclusao");


    event.stopPropagation();
    event.preventDefault();
});


function alternarIcone(opcao) {
editando = true;
const iconeExecutar = document.getElementById("iconeExecutar");
fecharModal();

const buttonInnerEditar = document.querySelector("#editar-button .button-inner");
buttonInnerEditar.classList.remove("excluir", "editar", "criar");
document.getElementById("editar-button").style.display = "none";

const buttonInnerExecutar = document.querySelector("#executar-button .button-inner-executar");
buttonInnerExecutar.style.transform = "translateX(0)";
document.getElementById("executar-button").style.display = "block";

if (opcao === "excluir") {
iconeExecutar.src = "../Imagens/Lixo.png";
buttonInnerExecutar.classList.add("excluir");

const materials = document.querySelectorAll(".material");
materials.forEach(material => {
    marcarParaExclusao(material);
});

materialParaEditar = null;
editando = false;
} else if (opcao === "editar") {
iconeExecutar.src = "../Imagens/Editar.png";
buttonInnerExecutar.classList.add("editar");
materialParaEditar = null;
} else if (opcao === "criar") {
iconeExecutar.src = "../Imagens/Mais.png";
buttonInnerExecutar.classList.add("criar");
editando = false;
}
}

function carregarImagem(input, imagem) {
    if (editando) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            imagem.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function executarAcao() {
if (document.querySelector("#executar-button .button-inner-executar img").src.includes("Lixo.png")) {
console.log("Ação de Exclusão executada");
excluirMateriaisSelecionados();
} else if (document.querySelector("#executar-button .button-inner-executar img").src.includes(
    "Editar.png")) {
console.log("Ação de Edição executada");
} else if (document.querySelector("#executar-button .button-inner-executar img").src.includes("Mais.png")) {
console.log("Ação de Criação executada");
criarNovoMaterial();
}

editando = false;
document.getElementById("executar-button").style.display = "none";
document.getElementById("editar-button").style.display = "block";
}


function cancelarAcao() {
if (materialParaEditar) {
reverterAlteracoes(materialParaEditar);
materialParaEditar = null;
} else {
const materiaisSelecionados = document.querySelectorAll(".material.selecionado-para-exclusao");
materiaisSelecionados.forEach(material => {
    reverterAlteracoes(material);
});
}

editando = false;
document.getElementById("executar-button").style.display = "none";
document.getElementById("editar-button").style.display = "block";
}



function reverterAlteracoes(material) {
material.classList.remove("selecionado-para-exclusao");
material.classList.remove("no-animation");

const originalNome = material.dataset.originalNome || "Nome do Material";
const originalDescricao = material.dataset.originalDescricao || "Descrição do material.";

material.querySelector("h2").textContent = originalNome;
material.querySelector("p").textContent = originalDescricao;

const imagemInput = material.querySelector('input[type="file"]');
if (imagemInput && imagemInput.files.length > 0) {
const file = imagemInput.files[0];
const reader = new FileReader();
reader.onload = function (e) {
    material.querySelector("img").src = e.target.result;
};
reader.readAsDataURL(file);
} else {
material.querySelector("img").src = "../Imagens/anex.png";
}
}



function excluirMateriaisSelecionados() {
    const materiaisSelecionados = document.querySelectorAll(".material.selecionado-para-exclusao");
    materiaisSelecionados.forEach(material => {
        material.remove();
    });
}

function criarNovoMaterial() {
    fecharModal2();
    fecharModal();
    const novoMaterial = document.createElement("div");
    novoMaterial.className = "material";
    novoMaterial.onclick = function () {
        marcarParaExclusao(this);
    };

    const materialContainer = document.querySelector(".material-container");
    materialContainer.appendChild(novoMaterial);

    const novaImagem = document.createElement("img");
    novaImagem.src = "../Imagens/anex.png"; 
    novaImagem.alt = "Novo Material";
    novaImagem.onclick = function () {
        editarImagem(this);
    };
    novoMaterial.appendChild(novaImagem);

    const novoTitulo = document.createElement("h2");
    novoTitulo.textContent = "Novo Material";
    novoTitulo.onclick = function () {
        editarNome(this);
    };
    novoMaterial.appendChild(novoTitulo);

    const novaDescricao = document.createElement("p");
    novaDescricao.textContent = "Descrição do novo material.";
    novaDescricao.onclick = function () {
        editarDescricao(this);
    };
    novoMaterial.appendChild(novaDescricao);
}


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
