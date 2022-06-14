var currentNumberWrapper = document.getElementById("currentNumber"); //Usando o "id" do HTML para podermos alterá-lo nas funções.
var currentNumber = 0;  //Start da função, declarando que valor inicial é "0".

//Primeira função, de incremento, ou seja, cada vez que o botão é precionado somamos 1.
function increment(){
    if(currentNumber<10){
    currentNumber += 1;
    document.getElementById('currentNumber').style.color='white';

    return currentNumberWrapper.innerHTML = currentNumber;
    }
}

//Primeira função, de decremento, ou seja, cada vez que o botão é precionado subtraímos 1.
function decrement(){
    if(currentNumber>-10 || currentNumber < 0){
    currentNumber -= 1;
    //Como proposto na aula, o desafio para que quando usarmos o decremento deixar o número vermelho.
    document.getElementById('currentNumber').style.color='red';

    return currentNumberWrapper.innerHTML = currentNumber;
    }
        
}

//Como proposto na aula, o desafio para usar o ".addEventListener" ao invés de usar o parâmetro "onclick"

document.getElementById('increment').addEventListener('click', increment);
document.getElementById('decrement').addEventListener('click', decrement);
