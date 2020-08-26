//criar função de rolagem para todos os dados
//renderizar resultados
//animar botoes
//desenhar dados


let divElement = document.querySelector('#app');
let divResult = document.querySelector('#result');

let contentApp = document.querySelector('.contentApp')
let content = document.querySelector('.content')

let result = document.querySelector('#app .result');
let dices = document.querySelector('#app .dices');
let quantity = document.querySelector('#app .quantity');

let resultContent = document.createElement('p');
let resultTotal = document.createElement('p');

let resultArray = [];

let somaTotal = 0;

divResult.appendChild(resultContent);
divResult.appendChild(resultTotal);




let btnAdd = document.querySelector('[addDice]');
let btnRemove = document.querySelector('[removeDice]');

let btn = document.querySelector('#app .btn');


btnAdd.onclick = function () {

    

    let divArray = document.querySelectorAll('.contentApp')
    let newArray = Array.from(divArray)

    if (newArray.length < 5) {
        //clonar node
        let cloneDice = contentApp.cloneNode(true);
        divElement.appendChild(cloneDice)      


    }

    newArray.nodeList
    console.log(newArray);
}

//filtrar dados disponíveis
//carregar imagem do dado referente

btnRemove.onclick = function () {   

    let divPai = document.querySelector('.contentDices')
    let divFilho = divPai.lastChild
    let divArray = document.querySelectorAll('.contentApp')
    let newArray = Array.from(divArray)    

    if (newArray.length >1) {
        //excluir dado node
        divPai.removeChild(divFilho)     

    }

   
    console.log(divPai);
}






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