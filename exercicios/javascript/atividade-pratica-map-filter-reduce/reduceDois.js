const lista = [
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'cereal' ,
        preco:12,
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, currennt, index){
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({currennt});
        return prev - currennt.preco;
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista));