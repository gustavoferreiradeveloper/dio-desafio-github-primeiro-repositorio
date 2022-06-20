const alunos = [
	{
		nome: 'Gustavo',
		nota: 9,
		turma: '3A',
	},
	{
		nome: 'Mellissa',
		nota: 10,
		turma: '1B',
	},
	{
		nome: 'Vallentina',
		nota: 6,
		turma: '2C',
	},
];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 7));
