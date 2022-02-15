console.log("EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO");
//1)Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
console.log(10);
console.log(10, 5);
//2)Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
console.log(10, 10, 10);


console.log("EXERCÍCIOS DE ESCRITA DE CÓDIGO");

//1a) Declare uma variável para armazenar um nome, sem atribuir um valor.
var nome;

//1b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
var idade;

//1c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
console.log(typeof nome);
console.log(typeof idade);

//1d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
console.log("1d) O undefined apareceu porque não atribuímos um valor para a variável, ela ainda está indefinida/indeterminada");

//1e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
var nome = prompt("Qual o seu nome? :D");
var idade = prompt ("Quantos anos você tem?");

//1f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
console.log("A variável nome é um " + typeof nome);
console.log("A variável idade é um " + typeof idade);
console.log("O comando prompt pega as informações digitadas pelo usuário e as interpreta como string");

//1g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu
console.log("Olá " + nome + ", você tem " + idade + " anos.");

//2)Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
var tempo = "Hoje está nublado? ";
var temperatura = "Está calor? ";
var horas = "Já é tarde? "

//2a)a) Crie três novas variáveis, contendo as respostas
var respostaTempo = "Não";
var respostaTemperatura = "Sim";
var respostaHoras = "Sim";

//b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
console.log(tempo + respostaTempo);
console.log(temperatura + respostaTemperatura);
console.log(horas + respostaHoras);

/*3. Suponha que temos duas variáveis `a` e `b`, cada uma com um valor inicial
    

let a = 10
let b = 25


Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`. 

Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10. */

let a = 10;
let b = 25;
let c;

c = a;
console.log(c);
console.log(a);

a = b;
console.log(a);
console.log(b);

b = c;
console.log(b);
console.log(c);

console.log("Assim, percebemos que os valores de a é " + a + " e b é " + b);

//Desafio

var num1 = Number(prompt("Digite o primeiro número"));
var num2 = Number(prompt("Digite o segundo número"));

console.log("Se somarmos " + num1 + " e " + num2 + " teremos o número " + (num1+num2));
console.log("Se multiplicarmos " + num1 + " e " + num2 + " teremos o número " + (num1*num2));









