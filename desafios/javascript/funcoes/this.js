function calcularIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Mellissa',
	idade: 2,
};

const pessoa2 = {
	nome: 'Vallentina',
	idade: 3,
};

const pessoa3 = {
	nome: 'Gustavo',
	idade: 33,
};

console.log(calcularIdade.call(pessoa3, 40));
console.log(calcularIdade.apply(pessoa1, [24]));
