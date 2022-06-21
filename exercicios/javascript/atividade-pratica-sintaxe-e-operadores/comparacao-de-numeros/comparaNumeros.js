function comparacao(num1, num2){

    if (num1===null & num1===undefined || num1===null & num1===undefined) return "Defina dois números";
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2)

    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2){
    let saoIguais = '';

    if(num1 !== num2){
        saoIguais='não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;
    let resultadoDez = "menor";
    let resultadoVinte = "menor";
    const maiorQueDez = soma > 10;
    const maiorQueVinte = soma > 20;

    if(maiorQueDez){
        resultadoDez = "maior";
    }

    if (maiorQueVinte){
        resultadoVinte = "maior";
    }

    return `Sua soma é ${soma}, que é ${resultadoDez} que 10 e ${resultadoVinte} que 20.`
}

console.log(comparacao(3,3));