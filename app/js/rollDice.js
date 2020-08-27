//criar função de rolagem para todos os dados
//renderizar resultados
//desenhar dados
//carregar imagem do dado referente


//animar botoes
//filtrar dados disponíveis



let contentDices = document.querySelector('.contentDices');
let divResult = document.querySelector('#result');

let dynamicDices = document.querySelector('[dynamicDices]')

let contentApp = document.querySelector('.contentApp')
let content = document.querySelector('.content')

let result = document.querySelector('#app .result');
let dices = document.querySelector('.dices');
let quantity = document.querySelector('#app .quantity');

let resultContent = document.createElement('p');
let resultTotal = document.createElement('p');



let resultArray = [];
let somaTotal = 0;

divResult.appendChild(resultContent);
divResult.appendChild(resultTotal);

let btnAdd = document.querySelector('[addDice]');
let btnRemove = document.querySelector('[removeDice]');
let btnRoll = document.querySelector('[btnRoll]');


//array com conjunto de dados
let divArray = document.querySelectorAll('.contentApp')
let newArray = Array.from(divArray)


btnAdd.onclick = function () {

    if (newArray.length < 6) {

        let cloneDice = contentApp.cloneNode(true)
        contentDices.append(cloneDice)
        newArray.push(cloneDice)

        console.log('nArray', newArray);
    }
    diceIdentifier(newArray)
}



btnRemove.onclick = function () {
    let divPai = document.querySelector('.contentDices')
    let divFilho = divPai.lastChild

    if (newArray.length > 1) {
        //excluir dado node
        divPai.removeChild(divFilho)
        newArray.pop()
    }

    console.log(newArray);
}




btnRoll.onclick = function () {
    resultArray = [];
    somaTotal = 0;
    resultContent.textContent = ' ';
    roll(quantity.value);
    console.log('qtt: ' + quantity.value);
}

function createArray(elemento) {
    let elem = document.querySelectorAll(elemento)
    return arrayFinal = Array.from(elem)
}

function diceIdentifier(diceCopys) {
    let n = diceCopys.length
    let elem = diceCopys[n - 1].querySelector('[dices]')
    let diceArray = Array.from(elem)

    if (n > 6) { n = 6 }

    return diceArray[n - 1].selected = true
}


function RollDice({ min = 1, max = 6 }) {
    const dice = Math.random() * (max - min) + min;
    return Math.floor(dice);
}

function roll(qtt) {
    let rollsField = document.querySelector('[rollsField]')
    let totalField = document.querySelector('[totalField]')

    for (i = 1; i <= qtt; i++) {
        let rollResult = RollDice(selectDice(dices));
        resultArray[i] = rollResult;

        somaTotal += resultArray[i];
        resultTotal.textContent = 'total: ' + somaTotal;
        resultContent.textContent += ' ' + resultArray[i];

        rollsField.innerHTML += ' ';
        totalField.innerHTML = resultArray[i];
    }
}

function selectDice(dice) {
    if (dice.value == 'D6') {
        return { min: 1, max: 6 };

    }


}