// - **Exercício 1**
// const valorTerminal = Number(process.argv[2])
// const nome = "Karen"
// const idade = 23
// const idadeMaisSete = idade+valorTerminal
//     a) **Responda como comentário no seu código:** como fazemos para acessar os parâmetros passados na linha de comando para o Node? process.argv[2]

//     b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura: "Olá, (Nome)! Você tem (sua idade) anos."
// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos."Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"
// console.log(`Em sete anos você terá ${idadeMaisSete} anos.`)

// - **Exercício 2**

//     Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.
// const num1 = Number(process.argv[3])
// const num2 = Number(process.argv[4])
// const operacao = process.argv[2];
// switch(operacao) {
//     case "soma":
//         console.log(num1+num2);
//         break;
//     case "subt":
//         console.log(num1-num2);
//         break;
//     case "mult": 
//     console.log(num1*num2);
//         break;
//     default:
//         console.log(num1/num2);
//         break;
// }

// - **Exercício 3**

//     Crie uma aplicação Node que receba uma string representando **uma tarefa.** O programa deve adicionar a **nova tarefa** em uma variável que represente uma **lista de tarefas.** A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.

// let tarefas = ["Escovar os dentes", "Tomar café da manhã", "Estudar", "Levar o cachorro para passear"];
// tarefas.push(process.argv[2])
// console.log(tarefas);

// - **Exercício 4**
    
//     Transforme os exercícios anteriores em pacotes individuais do Node (crie uma pasta para cada um)




