/* Array com valores propostos na descrição  da atividade*/
const myArr = [30, 30, 40, 5, 223, 2049, 3034, 5];

/* Função para mapearmos o array */
function valoresUnicos(arr){

	/* Abertura / Criação do set para que possamos retornar valores únicos que estejam no array acima */
	const mySet = new Set(arr);

	/* Retorno da variável com valores únicos, note que utilei o argumento spread, para que os elementos do set se tornem um array, caso contrário ele retornaria um set com um array dentro, não um array a parte */
	return [...mySet];
}

/* Impressão dos valores únicos na tela do terminal */
console.log(valoresUnicos(myArr));