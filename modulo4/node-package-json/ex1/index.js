// - **Exercício 1**
const valorTerminal = Number(process.argv[2])
const nome = "Karen"
const idade = 23
const idadeMaisSete = idade+valorTerminal
//     a) **Responda como comentário no seu código:** como fazemos para acessar os parâmetros passados na linha de comando para o Node? process.argv[2]

//     b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura: "Olá, (Nome)! Você tem (sua idade) anos."
console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos."Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"
console.log(`Em sete anos você terá ${idadeMaisSete} anos.`)
