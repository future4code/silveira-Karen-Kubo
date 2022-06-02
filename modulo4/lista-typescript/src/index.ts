// 1 - 
function retornaString(nome: string, string: string): string {
    const splitData = string.split("/")

    return `Olá, me chamo ${nome}, nasci no dia ${splitData[0]} do mês ${splitData[1]} do ano de ${splitData[2]}}`
}

console.log(retornaString("Karen", "09/04/1999"))

// 2 -
function identificaVariavel(any: any): void {
    console.log(typeof any)
}
identificaVariavel(undefined)

//3 - 
enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type Filme = {
    nome: string,
    ano: number,
    genero: GENERO,
    pontuacao?: number
}

function criarFilme(nome: string, ano: number, genero: GENERO, pontuacao?: number): Filme {
    const novoFilme: Filme = {
        nome: nome,
        ano: ano,
        genero: genero,
        pontuacao: pontuacao
    }
    return novoFilme
}

console.log(criarFilme("Duna", 2021, GENERO.ACAO, 74))

console.log(criarFilme("Duna", 2021, GENERO.ACAO))

// 4 -
enum SETOR {
    Financeiro = "Financeiro",
    Vendas = "Vendas",
    Marketing = "Marketing"
}

type Colaboradores = {
    nome: string,
    salario: number,
    setor: SETOR,
    presencial: boolean
}

const pessoas: Colaboradores[] = [
    { nome: "Marcos", salario: 2500, setor: SETOR.Marketing, presencial: true },
    { nome: "Maria", salario: 1500, setor: SETOR.Vendas, presencial: false },
    { nome: "Salete", salario: 2200, setor: SETOR.Financeiro, presencial: true },
    { nome: "João", salario: 2800, setor: SETOR.Marketing, presencial: false },
    { nome: "Josué", salario: 5500, setor: SETOR.Financeiro, presencial: true },
    { nome: "Natalia", salario: 4700, setor: SETOR.Vendas, presencial: true },
    { nome: "Paola", salario: 3500, setor: SETOR.Marketing, presencial: true }
]
function retornaColaboradores(pessoas: Colaboradores[]): Colaboradores[] {
    const presencialmente = pessoas.filter((pessoa) => {
        return pessoa.presencial === true
    })
    return presencialmente
}

console.log(retornaColaboradores(pessoas))

// 5 -
type Dados = {
    name: string,
    email: string,
    role: string
}

const usuarios = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
]
function retornaEmail(usuarios: Dados[]): Array<string> {

    const email = usuarios.filter((usuario) => {
        return usuario.role === "admin"
    })
        .map((usuario) => {
            return usuario.email
        })
    return email
}
console.log(retornaEmail(usuarios))

// 6 -
type Saldo = {
    cliente: string,
    saldoTotal: number,
    debitos: Array<number>
}

const clientes: Saldo[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function identificaSaldoNegativo(clientes: Saldo[]): Saldo[] {

    const somaDebitos = clientes.filter((cliente) => {
        let soma = 0;
        for (let i: number = 0; i < cliente.debitos.length; i++) {
            soma += cliente.debitos[i]
        }
        cliente.debitos = [];
        cliente.saldoTotal = cliente.saldoTotal - soma;
        if (cliente.saldoTotal < 0) {
            return cliente
        }
    })
    return somaDebitos
}

console.log(identificaSaldoNegativo(clientes))

// 7 -
type Estoque = {
    nome: string,
    quantidade: number,
    valorUnitario: any
}
const estoque: Estoque[] = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
]

function arrumaPreco(estoque: Estoque[]): Estoque[] {
    const ajustaPreco = (preco: number): string => {
        const valorAjustado: string = preco.toFixed(2).replace('.', ',')
        return "R$ " + valorAjustado
    }

    const precoBr = estoque.map((est) => {
        est.valorUnitario = ajustaPreco(est.valorUnitario)
        return est
    })

    return precoBr
}

console.log(arrumaPreco(estoque))

// 8 -
function calcularRenovacao(nascimento: string, carteira: string): boolean {
    let dataNascimento = new Date(nascimento.split("/").reverse().join('-'));
    let dataCarteira = new Date(carteira.split("/").reverse().join('-'));
    let today = new Date()

    let diferencaTempoIdade = Math.abs(today.getTime() - dataNascimento.getTime());
    let diferencaDiasIdade = Math.ceil(diferencaTempoIdade / (1000 * 3600 * 24))
    let diferencaTempoCarteira = Math.abs(dataCarteira.getTime() - dataNascimento.getTime())
    let diferençaDiasCarteira = Math.ceil(diferencaTempoCarteira / (1000 * 3600 * 24))

    let idade = Math.floor(diferencaDiasIdade / 325)
    let tempoCarteira = Math.floor(diferençaDiasCarteira / 325)

    if (idade <= 20 && tempoCarteira % 5 === 0) {
        return true
    } else if (idade > 20 && idade <= 50 && tempoCarteira % 10 === 0) {
        return true
    } else if (idade > 50 && tempoCarteira % 15 === 0) {
        return true
    } else {
        return false
    }
}
console.log(calcularRenovacao("09/04/1999", "27/05/2012"))

// 9 -
function anagrama(frase: string): number {
    const fraseSplit = frase.toLowerCase().split("");
    const repetidos = []
    const filtrandoIguais = fraseSplit.filter((elemento, i) => {
        if (fraseSplit.indexOf(elemento) !== i) {
            repetidos.push(elemento)
        }
        return fraseSplit.indexOf(elemento) == i;
    })
    let resultado: number = filtrandoIguais.length;
    for (let i = 1; i < filtrandoIguais.length; i++) {
        resultado *= i;
    }
    return resultado
}
console.log(anagrama("abc"))

//10
function validaCPF(CPF: string): boolean {

    const CPFSplit = CPF.split("");

    const numeros = CPFSplit.filter((elemento) => {
        return elemento !== "." && elemento !== "-"
    }).splice(0, 9).map((elemento) => {
        return parseInt(elemento)
    })

    //calculando primeiro dígito
    let primeiroMultiplicador: number = 10;
    let valor: number = 0;
    for (let i: number = 0; i < numeros.length; i++) {
        valor = valor + (numeros[i] * primeiroMultiplicador)
        primeiroMultiplicador = primeiroMultiplicador - 1;
    }
    let primeiroCalc = valor % 11
    let primeiroDV = 11 - primeiroCalc

    //calculando segundo dígito 
    const numerosCom1DV = CPFSplit.filter((elemento) => {
        return elemento !== "." && elemento !== "-"
    }).splice(0, 10).map((elemento) => {
        return parseInt(elemento)
    })

    let segundoMultiplicador: number = 11;
    let segundoValor: number = 0;
    for (let i: number = 0; i < numerosCom1DV.length; i++) {
        segundoValor = segundoValor + (numerosCom1DV[i] * segundoMultiplicador)
        segundoMultiplicador = segundoMultiplicador - 1;
    }
    let segundoCalc = segundoValor % 11
    let segundoDV = 11 - segundoCalc

    //validando
    const cpf = CPFSplit.filter((elemento) => {
        return elemento !== "." && elemento !== "-"
    }).map((elemento) => {
        return parseInt(elemento)
    })

    if (primeiroDV < 10 && cpf[9] === primeiroDV && segundoDV < 10 && cpf[10] === segundoDV) {
        return true
    } else if (primeiroDV >= 10 && cpf[9] === 0 && segundoDV < 10 && cpf[10] === segundoDV) {
        return true
    } else if (primeiroDV < 10 && cpf[9] === primeiroDV && segundoDV >= 10 && cpf[10] === 0) {
        return true
    } else if (primeiroDV >= 10 && cpf[9] === 0 && segundoDV >= 10 && cpf[10] === 0) {
        return true
    } else return false;

}
console.log(validaCPF("137.509.568-47"))

// 11 -
const numerosRomanos = [
    {letra: 'M', valor: 1000},
    {letra: 'CM', valor: 900},
    {letra: 'D', valor: 500},
    {letra: 'CD', valor: 400},
    {letra: 'C', valor: 100},
    {letra: 'XC', valor: 90},
    {letra: 'L', valor: 50},
    {letra: 'XL', valor: 40},
    {letra: 'C', valor: 10},
    {letra: 'IX', valor: 9},
    {letra: 'V', valor: 5},
    {letra: 'IV', valor: 4},
    {letra: 'I', valor: 1}]

function conversor(num: number): string {

    if (num === 0) {
        return ''
    }
    for (let i:number = 0; i < numerosRomanos.length; i++) {
        if (num >= numerosRomanos[i].valor) {
            return (numerosRomanos[i].letra + conversor(num - numerosRomanos[i].valor))
        }
    }
}

console.log(conversor(2020))