function filtraPares(arrPar){
    return arrPar.filter(callbackPar)
}

function callbackPar(itemPar){
    return itemPar % 2 === 0;
}

const meuArrayPar = [1, 23 , 55, 67, 30, 2, 4];

console.log(filtraPares(meuArrayPar));

function filtraImpares(arrImpar){
    return arrImpar.filter(callbackImpar)
}

function callbackImpar(itemImpar){
    return itemImpar % 2 !== 0;
}

const meuArrayImpar = [1, 23 , 55, 67, 30, 2, 4];

console.log(filtraImpares(meuArrayImpar));