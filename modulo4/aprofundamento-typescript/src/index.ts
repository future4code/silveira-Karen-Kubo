// Exercício 1
// a) Type number is not assignable to type string.
// let minhaString:string = "Oi"
// minhaString = 3; 

// b) Type string is not assignable to type number.
// let meuNumero:number=0;
// meuNumero="0";
// Solução:
// let meuNumero: number | string = "0";

// c)
type Person = {
    nome: string,
    idade: number,
    corFavorita: string
}
// const karen: Person = {
//     nome: "Karen",
//     idade: 23,
//     corFavorita: "Branco"
// }
// const fulano: Person = {
//     nome: "Fulano",
//     idade: 33,
//     corFavorita: "Rosa"
// }
// const ciclano: Person = {
//     nome: "Ciclano",
//     idade: 43,
//     corFavorita: "Preto"
// }

// d)
enum arcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}
const karen: Person = {
    nome: "Karen",
    idade: 23,
    corFavorita: arcoIris.AMARELO
}
const fulano: Person = {
    nome: "Fulano",
    idade: 33,
    corFavorita: arcoIris.VERMELHO
}
const ciclano: Person = {
    nome: "Ciclano",
    idade: 43,
    corFavorita: arcoIris.ANIL
}

//Exercício 2
// a) numeros é a entrada, sendo um array de numeros, numerosOrdenados é a organização desse array em ordem crescente, soma é um número iniciando em 0, estatísticas é objeto de numeros (maior, menor e a media dos numeros do array). Por fim, a função irá retornar um objeto.
type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: Estatisticas
}

let arrayNumeros: number[] = [0, 30, 20, 120, 3, 5, -12, 4, 7, 123, -232, 1, 336, 15]

function obterEstatisticas(numeros: number[]): AmostraDeDados {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return {
        numeros: numeros,
        obterEstatisticas: estatisticas
    }
}

console.log(obterEstatisticas(arrayNumeros))

// Exercício 3
type Post = {
    autor: string,
    texto: string
}

const dumbledore: Post = {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
}
const snape: Post = {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
}
const hermione: Post = {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
}
const dobby: Post = {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
}
const voldemort: Post = {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
}

const posts: Post[] = [
    dumbledore,
    snape,
    hermione,
    dobby,
    voldemort
]

console.log(posts)


