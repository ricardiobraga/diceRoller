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

let resultArray = [];

divResult.appendChild(resultContent);







let btn = document.querySelector('#app .btn');






btn.onclick = function() {

    resultArray = [];
    roll(quantity.value);
    console.log('qtt: ' + quantity.value);
}

function RollDice({min = 1, max = 6})
{
        const dice = Math.random() * (max - min) + min;
    return Math.floor(dice);
    }



function roll(qtt)
{
    for(i = 1; i <= qtt; i++)
    {
        let rollResult = RollDice(selectDice(dices));
        resultArray[i] = rollResult;

        resultContent.textContent = resultArray;
        console.log('dajsda');
    }
     


}

function selectDice(dice)
{    
    
    if(dice.value == 'D6')
    {
      return {min: 1, max: 6};
             
    }
}