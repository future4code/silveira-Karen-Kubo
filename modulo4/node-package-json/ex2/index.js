// - **Exercício 2**

//     Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])
const operacao = process.argv[2];
switch(operacao) {
    case "soma":
        console.log(num1+num2);
        break;
    case "subt":
        console.log(num1-num2);
        break;
    case "mult": 
    console.log(num1*num2);
        break;
    default:
        console.log(num1/num2);
        break;
}



