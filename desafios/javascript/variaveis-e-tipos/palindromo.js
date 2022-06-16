// solução 1
// A função abaixo vai verificar se a palavra escrita é um palíndromo ou não.
function verificacaoPalindromo(string) {
	//Neste if verificaremos se a palavra digitada é um palíndromo.
	//Já no parâmetro a exclamação verifica se todos os valores são diferentes de uma string, ou seja: null, undefined, number e false.
	if (!string) return; 

	//Aqui trabalharemos apenas com a possibilidade que a "string" existe.
	//Usaremos uma série de métodos encadeados.
	console.log(`Nessa primeira solução a palavra ${string}, ao contrário fica "${string.split('').reverse().join('')}", portanto o palíndromo é: ${string === string.split('').reverse().join('')}`);

}//Note que não usamos nenhum else, pelo fato de já haver o return, pois nele só com a premissa da condição ele já retorna e sai da função.

// Mais informações sobre essa solução deixei anexado no diretório "anotacoes" começando na página 09.
verificacaoPalindromo('cat');

// solução 2
// A função abaixo vai verificar se a palavra escrita é um palíndromo ou não.
function varificacaoPalindromo2(string) {
	if (!string) return;
	if (!string.length) return;

	//Nesta solução já estamos usando o for, para percorrer todos caracteres da string com a propriedade .length para verificar se a string existe.
	for (var i = 0; i < string.length / 2; i++)/* Aqui estamos percorrendo toda string de duas em duas casas, comparando se o primeiro caractere é igual ao ultimo neste caso, contando que a palavra recebida tenha 3 letras */ {

		//Na condição deste if nos fazemos a checagem para que se o elemento (caractere) que está dentro do índice não for igual ao último caractere, retornamos false.
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

varificacaoPalindromo2('asa');
