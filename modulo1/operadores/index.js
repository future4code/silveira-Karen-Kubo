// -------------Exercícios de interpretação de código-------------

// 1 - Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // true && true = true

console.log("d. ", typeof resultado) // boolean

//2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 
    

    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")
    
    const soma = primeiroNumero + segundoNumero // O sistema irá concatenar as strings, portanto, o resultado será 33. Ele não especificou que o prompt deveria ser convertido em número.
    
    console.log(soma)

// 3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

console.log ("Ele deve colocar Number() para converter as strings em números, assim o sistema irá realizar a operação aritmética adequadamente.");

// ----------------Exercícios de escrita de código--------------

/*1. Faça um programa que:
    
    a) Pergunte a idade do usuário
    
    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    
    d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo) */

let idade = Number(prompt("Qual a sua idade?"));
let idadeAmigx = Number(prompt("Qual a idade do seu melhor amigo(a)?"));

console.log( "Sua idade é maior do que a dx seu melhor amigx? " + (idade > idadeAmigx));
console.log( "A diferença de idade entre você e elx é " + (idade - idadeAmigx));

/**2. Faça um programa que:
    
    a) Peça ao usuário que insira um número **par**
    
    b) Imprima na console **o resto da divisão** desse número por 2.
    
    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    
    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código */

let numero = Number(prompt("Digite um número par"));

console.log("O resto da divisão entre esse número e 2 é " + (numero % 2) + ". Percebemos que todo resto da divisão de números pares é 0, pois todo número par é divisível por 2.");

/**3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    a) A idade do usuário em meses
    
    b) A idade do usuário em dias
    
    c) A idade do usuário em horas */

let idadeAnos = Number(prompt("Quantos anos você tem?"));

let idadeMeses = idadeAnos * 12;
let idadeDias = idadeAnos * 12 * 365; // variável incerta, não incluso anos bissextos;
let idadeHoras = idadeAnos * 12 * 365 * 24;
console.log(idadeMeses, idadeDias, idadeHoras);

/**4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
    
    
    ```html
    O primeiro numero é maior que o segundo? true
    O primeiro numero é igual ao segundo? false
    O primeiro numero é divisível pelo segundo? true
    O segundo numero é divisível pelo primeiro? true
    
    obs: O true ou false vai depender dos números inseridos e do resultado das operações.
    ``` */


let numero1 = Number(prompt("Digite aqui seu primeiro número"));
let numero2 = Number(prompt("Digite aqui seu segundo número"));

console.log("O primeiro número é maior que o segundo? ", (numero1 > numero2));
console.log("O primeiro numero é igual ao segundo?", (numero1 === numero2));
console.log("O primeiro numero é divisível pelo segundo?",  ((numero1 % numero2) == 0));
console.log("O segundo numero é divisível pelo primeiro?",  ((numero2 % numero1) == 0));


























