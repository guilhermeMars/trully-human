function submitForm(){
    // window.alert("teste");
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
        window.alert("Seu perfil se aproxima mais da: Ansiedade");
    } else if(count_depressao > count_ansiedade && count_depressao >= count_raiva && count_depressao >= count_controle){
        window.alert("Seu perfil se aproxima mais de: Depressão");
    } else if(count_raiva > count_ansiedade && count_raiva > count_depressao && count_raiva >= count_controle){
        window.alert("Seu perfil se aproxima mais da: Raiva");
    } else if(count_controle > count_ansiedade && count_controle > count_depressao && count_controle > count_raiva){
        window.alert("Seu perfil se aproxima mais do: Controle Emocional");
    } else{
        window.alert("Erro de redirecionamento!")
    }
}