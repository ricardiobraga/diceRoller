// selecionar dado
// quantidade de dados
// criar dados virtuais
// rolar

let divElement = document.querySelector('#app');
let divResult = document.querySelector('#result');

let result = document.querySelector('#app .result');
let dices = document.querySelector('#app .dices');
let quantity = document.querySelector('#app .quantity');

let resultContent = document.createElement('p');
let resultTotal = document.createElement('p');

let resultArray = [];

let somaTotal = 0;

divResult.appendChild(resultContent);
divResult.appendChild(resultTotal);






let btn = document.querySelector('#app .btn');


btn.onclick = function () {
    resultArray = [];
    somaTotal = 0;
    resultContent.textContent = ' ';
    roll(quantity.value);
    console.log('qtt: ' + quantity.value);
}

function RollDice({ min = 1, max = 6 }) {
    const dice = Math.random() * (max - min) + min;
    return Math.floor(dice);
}



function roll(qtt) {
    for (i = 1; i <= qtt; i++) {
        let rollResult = RollDice(selectDice(dices));
        resultArray[i] = rollResult;

            somaTotal += resultArray[i];
            resultTotal.textContent = 'total: ' + somaTotal;
            resultContent.textContent += ' ' + resultArray[i];



    }



}

function selectDice(dice) {

    if (dice.value == 'D6') {
        return { min: 1, max: 6 };

    }
}