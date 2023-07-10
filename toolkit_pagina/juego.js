let [computer_score,user_score]=[0,0];
let result_ref = document.getElementById("result");
let choices_object = {
    'piedra' : {
        'piedra' : 'empate',
        'tijeras' : 'ganar',
        'papel' : 'perder'
    },
    'tijeras' : {
        'piedra' : 'perder',
        'tijeras' : 'empate',
        'papel' : 'ganar'
    },
    'papel' : {
        'piedra' : 'ganar',
        'tijeras' : 'perder',
        'papel' : 'empate'
    }

}

function checker(input){
    var choices = ["piedra", "papel", "tijeras"];
    var num = Math.floor(Math.random()*3);

    document.getElementById("comp_choice").innerHTML = 
    ` La computadora eligió: <span> ${choices[num].toUpperCase()} </span>`;

    document.getElementById("user_choice").innerHTML = 
    ` Elegiste: <span> ${input.toUpperCase()} </span>`;

    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]){
        case 'ganar':
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "Ganaste";
            user_score++;
            break;
        case 'perder':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "Perdiste";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "EMPATE";
            break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}