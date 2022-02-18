//-------------------Exercícios de interpretação de código--------
/** 1. Leia o código abaixo
    
   
    function minhaFuncao(variavel) {
    	return variavel * 5
    }
    
    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))
    
    
    a) O que vai ser impresso no console? 10 e 50;
    
    b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console? Nada aconteceria, pois o comando para mostrar no console foi retirado.*/

/**2. Leia o código abaixo
    
    ```jsx
    let textoDoUsuario = prompt("Insira um texto");
    
    const outraFuncao = function(texto) {
    	return texto.toLowerCase().includes("cenoura")
    }
    
    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)
    ```
    
    a. Explique o que essa função faz e qual é sua utilidade
        Essa função pega o texto inserido pelo usuário, tornando todas as letras minúsculas e verifica se há a palavra cenoura na frase digitada. Depois mostra o resultado no console.
    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
         i.   `Eu gosto de cenoura` - eu gosto de cenoura true
         ii.  `CENOURA é bom pra vista` - cenoura é bom pra vista false
         iii. `Cenouras crescem na terra` - cenouras crescen ma terra false*/ 

// -------------------Exercícios de escrita de código-----------------
//1a)

/*function imprimeTexto() {
    nome = prompt("Digite seu nome");
    idade = prompt("Digite sua idade");
    cidade = prompt("Digite a cidade em que reside");
    estudante = prompt("Me diga se você é estudante. Responda apenas com: sou estudante ou não sou estudante").toLowerCase();
   
    console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e ${estudante}.`);
}
imprimeTexto();*/

//1b)
/*function imprimeInfo(nome, idade, cidade, profissao) {
    nome = prompt("Digite seu nome");
    idade = prompt("Digite sua idade");
    Number(idade);
    cidade = prompt("Digite a cidade em que reside");
    profissao = prompt("Digite sua profissão").toLowerCase();

    console.log (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`);
    
}

imprimeInfo();
*/
//2a)
let a = Number(prompt("Digite um número do ex 2a)"));
let b = Number(prompt("Digite outro número do ex 2a)"));
function soma (a, b) {
    let somando = a + b;
    return somando;
}
soma(a, b);
console.log(soma(a, b));

//2b)
let c = Number(prompt("Digite um número do ex 2b)"));
let d = Number(prompt("Digite outro número do ex 2b)"));
function boolean(c, d) {
    let verifica = c > d;
    return verifica;
}
boolean(c, d);
console.log(boolean(c, d));

//2c
let e = Number(prompt("Digite um número do ex 2c"));
function numeroPar(e) {
    let par = e % 2
    return par === 0
}
console.log(numeroPar(e));

//2d
let f = prompt("Digite uma mensagem").toLowerCase();
function mensagem (f) { 
    
    let tamanho = f.length;
    return [f, tamanho];

}
console.log(mensagem(f));

//3
let g = Number(prompt("Digite um número do ex 3"));
let h = Number(prompt("Digite um número do ex 3"));

function operacoesBasicas (g, h) {
    let adicao = g + h;
    let subtracao = g - h;
    let multiplic = g * h;
    let divis = g / h;

    console.log(`A soma dos números resulta em: ${adicao}`);
    console.log(`A diferença dos números resulta em: ${subtracao}`);
    console.log(`A soma multiplicação dos números resulta em: ${multiplic}`);
    console.log(`A divisão dos números resulta em: ${divis}`);

}

operacoesBasicas(g, h);

// DESAFIO
let abc = Number(prompt("Digite um número para o desafio"));

const arrowFunction = abc => {
    console.log(abc)
};

let valora = Number(prompt("Digite outro número para o desafio"));
let valorb = Number(prompt("Digite outro número para o desafio"));

const arrowFunctionDois = (valora, valorb) => valora + valorb

console.log(arrowFunction(arrowFunctionDois));

let cata = Number(prompt("Digite um número pro cateto 1"));
let catb = Number(prompt("Digite um número pro cateto 2"));
function pitagoras (cata, catb) {
    let hip = Math.sqrt(Math.pow(cata, 2) + Math.pow(catb, 2));
    return hip;
    console.log(hip, cata, catb);
}
pitagoras(cata,catb);
