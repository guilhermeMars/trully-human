function submitForm(){
    // window.alert("teste");
    const popup = document.getElementById('popup');
    const p_inner = document.getElementById('p_inner');

    const perguntas = []
    try{
        perguntas.push(document.querySelector('input[name="pergunta01"]:checked').value);
        perguntas.push(document.querySelector('input[name="pergunta02"]:checked').value);
        perguntas.push(document.querySelector('input[name="pergunta03"]:checked').value);
        perguntas.push(document.querySelector('input[name="pergunta04"]:checked').value);
        perguntas.push(document.querySelector('input[name="pergunta05"]:checked').value);
    } catch{
        window.alert("Por favor, selecione todas as respostas")
    }
    console.log(perguntas)
    let count_ansiedade = 0;
    let count_depressao = 0;
    let count_raiva = 0;
    let count_controle = 0;
    for(let pergunta in perguntas){
        // console.log(perguntas[pergunta]);
        if(perguntas[pergunta] == 'Ansiedade'){
            count_ansiedade ++;
        } else if(perguntas[pergunta] == 'Depressao'){
            // window.alert("YESS DEU CERTO");
            count_depressao ++;
        } else if(perguntas[pergunta] == 'Raiva'){
            // window.alert("YESS DEU CERTO");
            count_raiva ++;
        } else if(perguntas[pergunta] == 'Controle emocional'){
            // window.alert("YESS DEU CERTO");
            count_controle ++;
        }
    }
    if(count_ansiedade >= count_depressao && count_ansiedade >= count_raiva && count_ansiedade >= count_controle){
        popup.classList.add('active');
        p_inner.innerHTML = "Seu perfil se aproxima mais da: <strong>Ansiedade </strong>";
    } else if(count_depressao > count_ansiedade && count_depressao >= count_raiva && count_depressao >= count_controle){
        popup.classList.add('active');
        p_inner.innerHTML = "Seu perfil se aproxima mais da: <strong>Depressão </strong>";
    } else if(count_raiva > count_ansiedade && count_raiva > count_depressao && count_raiva >= count_controle){
        popup.classList.add('active');
        p_inner.innerHTML = "Seu perfil se aproxima mais da: <strong>Raiva </strong>";
    } else if(count_controle > count_ansiedade && count_controle > count_depressao && count_controle > count_raiva){
        popup.classList.add('active');
        p_inner.innerHTML = "Seu perfil se aproxima mais da: <strong>Controle emocional </strong>";
    } else{
        window.alert("Erro de redirecionamento!")
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const closePopupBtn = document.getElementById('closePopupBtn');
    closePopupBtn.addEventListener('click', function () {
    popup.classList.remove('active'); // Remove a classe "active" para ocultar o pop-up
    });

    // Fechar o pop-up se o usuário clicar fora da área do conteúdo do pop-up
    window.addEventListener('click', function (event) {
    if (event.target === popup) {
        popup.classList.remove('active');
    }
    });
});
