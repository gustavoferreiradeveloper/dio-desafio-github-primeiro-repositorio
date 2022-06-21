/* Criação da função para retornar membros de um MAP */
function getAdmins(map){

	/* Array vazia que receberá os nomes dos ADMINS */
	let admins = [];

	/* Loop feito para para retornar uma lista com os nomes dos usuários que são ADMIN */
	for([key, value] of map){
		if(value === 'ADMIN'){
			admins.push(key);
		}
	}

	/* Retorno dos valores do if e parada da validação*/
	return admins;
}

/* Constante "variável" que receberá os nomes para que seja mapeada para dentro da função getAdmins */
const usuarios = new Map();

/* nome da variável | comando para adição de elementos | Nome do admin (chave) | Cargo (valor) */
usuarios.set('Gustavo', 'ADMIN');
usuarios.set('Rita', 'ADMIN');
usuarios.set('Pedro', 'USER');
usuarios.set('Flávia', 'USER');
usuarios.set('Gabriel', 'ADMIN');
usuarios.set('Giovanni', 'ADMIN');
usuarios.set('Márcia', 'USER');
usuarios.set('Marcos', 'USER');
usuarios.set('Mellissa', 'ADMIN');
usuarios.set('John', 'USER');

/* Retorno na tela do terminal a lista com os nomes dos usuários que são administradores */
console.log(getAdmins(usuarios))
/* Comando | Nome da função (map) | Variavel que recebeu os nomes (chave e valor) */