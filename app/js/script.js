let contentDices = document.querySelector('.contentDices');
let divResult = document.querySelector('#result');

let dynamicDices = document.querySelector('[dynamicDices]');

let contentApp = document.querySelector('.contentApp');
let content = document.querySelector('.content');


let dices = contentApp.querySelector('.dices');
let quantity = contentApp.querySelector('.quantity');

let diceValue = document.querySelector('[diceValue]');

//transforma "contentApp" em nodeList
let contentAppArray = document.querySelectorAll('.contentApp');
let newArray = Array.from(contentAppArray)

let btnRoll = document.querySelector('[btnRoll]');
let btnAdd = document.querySelector('[btnAdd]');
let btnRemove = document.querySelector('[btnRemove]');

let rollsField = document.querySelector('[rollsField]')
let totalField = document.querySelector('[totalField]')



let resultSoma = 0;

let resultArray = [{
    dado: "d4",
    resultado: 0
}]

let totalResult = 0;


btnRoll.onclick = function () {
    totalResult = 0;
    resultArray = [];
    resultRoll();
}


btnAdd.onclick = function () {

    addDice();


}

btnRemove.onclick = function () {

    removeDice()

}


function addDice() {

    

    contentAppArray = document.querySelectorAll('.contentApp');
    
    if (contentAppArray.length < 6) {

        let copyDice = contentApp.cloneNode(true)
        contentDices.append(copyDice)
        copyDice.querySelector('.quantity').value = 1

    }
    diceIdentifier(contentAppArray);
    console.log(contentAppArray);

}



function removeDice() {

    let divPai = document.querySelector('.contentDices')
    let divFilho = divPai.lastChild

    contentAppArray = document.querySelectorAll('.contentApp');

    if (contentAppArray.length > 1) {
        //excluir dado node
        divPai.removeChild(divFilho)
        console.log("array: ", contentAppArray.length);

    }
}

function resultRoll() {

    contentAppArray = document.querySelectorAll('.contentApp');
    let resultado = ""

    contentAppArray.forEach(e => {
        let dice = e.querySelector('.dices');
        let qtt = parseInt(e.querySelector('.quantity').value);
        let diceValue = e.querySelectorAll('option');
        let valorDoDado = 0;

        if(qtt > 10){
            alert("O valor máximo de dados é 10")
            qtt = 0
           quantity.value = 1
        }


        // verifica o valor do dado s,elecionado e atribui a variável valorDoDado
        diceValue.forEach(dice => {
            if (dice.selected === true) {
                //console.log("aqui: ", dice.getAttribute('diceValue')); 

                valorDoDado = dice.getAttribute('diceValue')
            }
        });

        for (let i = 0; i < qtt; i++) {
            rollDice(1, valorDoDado)

        }



    })

    renderResult()


    console.log('TOTAL:', totalResult);
    //resultado += resultSoma
    console.log("final: ", resultArray, "Total: ", totalResult);
}

function rollDice(min, max) {

    let resultRoll = 0
    min = Math.ceil(min);
    max = Math.floor(max);

    resultRoll = Math.floor(Math.random() * (max - min + 1)) + min;
    resultArray.push({ dado: `D${max}`, resultado: resultRoll })

}

// veerifica cada resultado no resultArray soma e renderiza na tela
function renderResult() {

    rollsField.innerHTML = "";
    for (let i = 0; i < resultArray.length; i++) {
        totalResult += resultArray[i].resultado;
        rollsField.innerHTML += ` <span> ${resultArray[i].dado} = </span>  ${resultArray[i].resultado}&nbsp  `;

    }

    totalField.innerHTML = totalResult;

}





function diceIdentifier(diceCopys) {
    diceCopys = document.querySelectorAll('.contentApp');
    let n = diceCopys.length
    let elem = diceCopys[n - 1].querySelector('[dices]')
    let diceArray = Array.from(elem)

    if (n > 6) { n = 6 }

    

    return diceArray[n -1].selected = true
    
}












