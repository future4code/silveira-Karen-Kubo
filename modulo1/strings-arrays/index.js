
//----------------Exercícios de interpretação de código
/*1) let array
console.log('a. ', array) //a. undefined

array = null
console.log('b. ', array) //b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //c. 11

let i = 0
console.log('d. ', array[i]) //d. 3

array[i+1] = 19
console.log('e. ', array) //e. array[3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) //f. 9*/

/* 2)const frase = prompt("Digite uma frase");

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);

//SUBI NUM ÔNIBUS EM MIRROCOS 27 */
 
//Exercícios de escrita de código
//1
let nomeDoUsuario = prompt("Insira seu usuário");
let emailDoUsuario = prompt("Insira seu e-mail");

console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + "!");


//2
let comidasPreferidas = ["lamen", "churrasco", "feijoada", "fettuccine", "risoto"];
console.log(comidasPreferidas);
console.log("Essas são as minhas comidas preferidas:", comidasPreferidas, ".");


comidasPreferidas[1] = prompt("Qual sua comida preferida?");
console.log(comidasPreferidas);

//3
let listaDeTarefas = [];
let tarefa1 = prompt("Me diga a primeira tarefa que você precise realizar hoje");
let tarefa2 = prompt("Me diga a segunda tarefa que você precise realizar hoje");
let tarefa3 = prompt("Me diga a terceira tarefa que você precise realizar hoje");
listaDeTarefas.push(tarefa1);
listaDeTarefas.push(tarefa2);
listaDeTarefas.push(tarefa3);
console.log(listaDeTarefas);

tarefaRealizada = Number(prompt("Retire o índice da tarefa realizada: 0, 1 ou 2"));
listaDeTarefas.splice(tarefaRealizada, 1);
console.log(listaDeTarefas);

//DESAFIO
//1
let fraseSplit = prompt("Digite uma frase");
let resultado = fraseSplit.split(" ");
console.log(resultado);

//2
array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
array.includes("Abacaxi");
console.log(array.indexOf("Abacaxi"), array.length);
