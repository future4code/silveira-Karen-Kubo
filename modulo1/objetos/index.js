// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/*1A - Matheus Nachtergaele; 
        Virginia Cavendish; 
        {canal: "Globo", horario: "14h"}*/

/*2A - 
console.log(cachorro)

	nome: "Juca", 
	idade: 3, 
	raca: "SRD"

console.log(gato)
    nome: "Juba", 
	idade: 3, 
	raca: "SRD"

console.log(tartaruga)
    nome: "Jubo", 
	idade: 3, 
	raca: "SRD"

2B - Faz uma cópia das informações do objeto anterior, trazendo-o para nova variável/objeto.

3A - 
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) - RETORNA FALSO
console.log(minhaFuncao(pessoa, "altura")) - PROPRIEDADE INEXISTENTE, RETORNA UNDEFINED

3B - Isso aconteceu porque o console pegou o valor da propriedade do nosso objeto, mas altura não existe, portanto, ele retornou como indefinido.
*/
// EXERCÍCIOS DE ESCRITA DE CÓDIGO
//1A
const pessoa1 = {
    nome: "Karen",
    apelidos: ["Ka", "Naomi", "Karenzita"]
};

function criaFrase (pessoa1) { 
    console.log(`Eu sou ${pessoa1.nome}, mas pode me chamar de: ${pessoa1.apelidos[0]}, ${pessoa1.apelidos[1]} ou ${pessoa1.apelidos[2]}.`)
};
criaFrase(pessoa1);

//1B
const pessoa2 = {
    ...pessoa1,
    apelidos: ["Kaka", "Kah", "Kazita"]
};
criaFrase(pessoa2);

//2A
const pessoa3 = {
    nome: "Karla",
    idade: 52,
    profissao: "técnica de enfermagem"
};

const pessoa4 = {
    nome: "Eduardo",
    idade: 52,
    profissao: "operador de produção"
};

//2B
function dadosPessoas(pessoa3, pessoa4) {
    console.log([pessoa3.nome, pessoa3.nome.length, pessoa3.idade, pessoa3.profissao, pessoa3.profissao.length]);
    console.log([pessoa4.nome, pessoa4.nome.length, pessoa4.idade, pessoa4.profissao, pessoa4.profissao.length]);
}
dadosPessoas(pessoa3,pessoa4);

//3A e 3B
let carrinho = [];
let fruta1 = {
    nome: "Banana",
    disponibilidade: true
};
let fruta2 = {
    nome: "Laranja",
    disponibilidade: true
};
let fruta3 = {
    nome: "Abacate",
    disponibilidade: true
};

//3D
function objetoFrutas(fruta1, fruta2, fruta3) {
    carrinho.push(fruta1, fruta2, fruta3);
    console.log(carrinho);
}
objetoFrutas(fruta1, fruta2, fruta3);


//DESAFIOS
//1
const user = {
    nome: prompt("Qual o seu nome?"),
    idade: Number(prompt("Quantos anos você tem?")),
    profissao: prompt("Qual sua profissão?")
};

console.log(user, typeof user);

//2
const filme1 = {
    nome:"Harry Potter e a Pedra Filosofal",
    anoLancamento: 2001
}
const filme2 = {
    nome: "As Crônicas de Nárnia - O Leão, a Feiticeira e o Guarda-Roupa",
    anoLancamento: 2005
}
function filmes (filme1, filme2) {
    console.log(`O primeiro filme foi lançado antes do segundo? ${filme1.anoLancamento < filme2.anoLancamento}`);
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.anoLancamento === filme2.anoLancamento}`);
}
filmes (filme1, filme2);

//3
function renovaDisponibilidade(fruta1) {
    fruta1.disponibilidade = false;
    console.log(carrinho);
}
renovaDisponibilidade(fruta1);

