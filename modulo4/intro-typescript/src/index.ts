//escreva o seu código aqui
//1
function checaTriangulo(a: number, b: number, c: number): string {
    if (a !== b && b !== c) {
        return "Escaleno";
    } else if (a === b && b === c) {
        return "Equilátero";
    } else {
        return "Isósceles";
    }
}
console.log(`Exercício 1: `,checaTriangulo(3, 3, 9))

//2
function imprimeTresCoresFavoritas(cor1: string, cor2: string, cor3: string): void {
    console.log(`Exercício 2: `, [cor1, cor2, cor3])
}

imprimeTresCoresFavoritas("branco", "rosa", "dourado")

//3
function checaAnoBissexto(ano: number): boolean {
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
}
console.log(`Exercício 3: `, checaAnoBissexto(2004));

//4
function comparaDoisNumeros(num1: number, num2: number) {
    let maiorNumero: number;
    let menorNumero: number;

    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
    } else {
        maiorNumero = num2;
        menorNumero = num1;
    }

    const diferenca = maiorNumero - menorNumero;

    return diferenca
}
console.log(`Exercício 4: `, comparaDoisNumeros(3, 5))

//5
function checaRenovacaoRG(anoAtual: number, anoNascimento: number, anoEmissao: number):boolean {
    const idade = anoAtual - anoNascimento
    const tempoCarteira = anoAtual - anoEmissao

    const cond1 = idade <= 20 && tempoCarteira >= 5
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 = idade > 50 && tempoCarteira >= 15

    return (cond1 || cond2 || cond3)
}
console.log(`Exercício 5: `, checaRenovacaoRG(2003, 1999, 2002))

//6

function operacoes(num1:number, num2:number):void {
    let maiorNumero: number;

    if (num1 > num2) {
        maiorNumero = num1;
    } else {
        maiorNumero = num2;
    }
    console.log(`Exercício 6 => Soma: `, (num1 + num2), `Substracao: `, (num1 - num2), `Multiplica: `, (num1 * num2), `O maior numero: `, maiorNumero)
}
operacoes(201, 2031)

//7

function transcreveRNA(rna:string):void {
    let frase = rna.split("")
    for (let i:number = 0; i < frase.length; i++) {
        if (frase[i] === "A") {
            frase[i] = "U"
        } else if (frase[i] === "T") {
            frase[i] = "A"
        } else if (frase[i] === "C") {
            frase[i] = "G"
        } else if (frase[i] === "G") {
            frase[i] = "C"
        }
    }
    console.log(`Exercício 7: `, frase.join(''))
}
transcreveRNA("ATTGCTGCGCATTAACGACGCGTA")

//8

function stringInversa(string:string):void {
    let fraseInversa = string.split('').reverse().join('')
    console.log(`Exercício 8: `, fraseInversa)
}
stringInversa("Hello World")