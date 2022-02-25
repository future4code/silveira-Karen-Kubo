// ----------------------- Exercícios de interpretação de código
//1 - 0; 1; 2; 3; 4

//2a - 19; 21; 23; 25; 27; 30
//2b - 
/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
let indice;
let i = 0
for (let numero of lista) {
    indice = lista.indexOf(numero);
    console.log(indice);
}
*/

//3 
// *
// **
// ***
// ****

//-------------------------Exercícios de escrita de código
//1
let pet = Number(prompt("Quantos bichinhos de estimação você tem?"));
//let nomes = [];
//let nome;
let nomes = [];
let nome;
i = 0;
if (pet == 0) {
    console.log("Que pena! Você pode adotar um pet");
} else if (pet > 0) {
    while ( i < pet){
    let nome = prompt("Bacana! Qual o nome delx?");
    nomes.push(nome);
    i++;
    }
    console.log(nomes);
}

//2
let arrayOriginal = [15, 20, 35, 40, 55];
//a
function imprimeArray (arrayOriginal) {
    for (i = 0; i < arrayOriginal.length; i++) {
        console.log(arrayOriginal[i])
    }
}
imprimeArray(arrayOriginal);

//b
function imprimeArrayDividido (arrayOriginal) {
    for (i = 0; i < arrayOriginal.length; i++) {
        console.log(arrayOriginal[i] * 10)
    }
}
imprimeArrayDividido(arrayOriginal);

//c
let novoArray = [];

function criarNovoArray(arrayOriginal, novoArray) {
    for (i = 0; i < arrayOriginal.length; i++) {
        if (arrayOriginal[i] % 2 === 0) {
            novoArray.push(arrayOriginal[i])
        }
    }
    console.log(novoArray);
}
criarNovoArray(arrayOriginal, novoArray);

//d
let novoArray2 = [];

function criarNovoArray2 (arrayOriginal, novoArray2) {
    for (i = 0; i < arrayOriginal.length; i++) {
        novoArray2.push(`O elemento do índex ${arrayOriginal.indexOf(arrayOriginal[i])} é ${arrayOriginal[i]}`);
    }
    console.log(novoArray2);
}
criarNovoArray2(arrayOriginal, novoArray2);

//e
let maiorNumero;
let maior = 20;
let menor = 20;
function verificaMaior (arrayOriginal) {
    for (let num of arrayOriginal) {
        if (num > maior ) {
            maior = num;
        }
    }
    return maior;
}
verificaMaior(arrayOriginal);
function verificaMenor (arrayOriginal) {
    for (let num of arrayOriginal) {
        if (num < menor ) {
           menor = num;
        }
    }
    return menor;
}
verificaMenor(arrayOriginal);
console.log(`O maior número é ${maior} e o menor é ${menor}`);

//-----------------------------Desafio
//1

let numeroSorteado = Number(prompt("Jogador 1: Escolha um número maior ou igual a 0"))

function jogar () { 
    console.log("VAMOS JOGAR!");
    for (tentativas = 0; tentativas < 10; tentativas++) {


let numero = Number(prompt("Jogador 2: Adivinhe o número que estou pensando (maior ou igual a 0)"));



if (numero !== numeroSorteado) {
        console.log(`Errou! O número chutado foi ${numero}`)
        if (numero > numeroSorteado) {
            console.log(`O número escolhido é menor`)
            
        } else if (numero < numeroSorteado) {
            console.log(`O número escolhido é maior`)
            
        }
    tentativas +=1
} else if (numero === numeroSorteado) {
    console.log(`Acertou!`);
    console.log(`O número de tentativas foi: ${tentativas+1}`)
    return;
}
}
}
jogar();

//2

let numeroSorteado1 = Math.floor(Math.random() * 100)

function jogarComputador () { 
    console.log("VAMOS JOGAR COM O COMPUTADOR!");

    for (tentativas = 0; tentativas < 15; tentativas++) {
    

let numero = Number(prompt("Jogador: Adivinhe o número que estou pensando (de 0 a 100)"));




if (numero !== numeroSorteado1) {
        console.log(`Errou! O número chutado foi ${numero}`)
        if (numero > numeroSorteado1) {
            console.log(`O número escolhido é menor`)
            
        } else if (numero < numeroSorteado1) {
            console.log(`O número escolhido é maior`)
            
        }
    tentativas +=1
} else if (numero === numeroSorteado1) {
    console.log(`Acertou!`);
    console.log(`O número de tentativas foi: ${tentativas+1}`)
    return;
}
}
    if (tentativas = 15) { 
        console.log(`Que pena! O n° sorteado era ${numeroSorteado1}`);
    }
}
jogarComputador();
