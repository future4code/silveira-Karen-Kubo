// Exercício 5
type Consultas = {
  nome: string,
  idade: number,
  dataDaConsulta: string
}

const agenda: Consultas[] = [
  { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
  { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
]

function ordenaConsultas(agenda: Consultas[]): Consultas[] {
  const agendaOrdenada = agenda.sort((a, b) => {
    if (a.nome < b.nome) {
      return -1
    }
    else if (a.nome > b.nome) {
      return 1
    }
    return 0;
  })

  return agendaOrdenada
}

//Exercício 6
// Pré-historia - SEM REGISTRO. 
// 4000 AC - Idade Antiga. 
// Em 476DC - Idade Média
// 1453 DC - Idade Moderna
// 1789 DC - Idade Contemporânea


function epoca(ano: number, sigla: string): string {
  enum termo {
    AC = "AC",
    DC = "DC"
  }

  if (ano > 4000 && sigla === termo.AC) {
    return "Pré-História"
  }
  else if (ano <= 4000 && sigla === termo.AC || ano >= 0 && ano < 476 && sigla === termo.DC) {
    return "Idade Antiga"
  }
  else if (ano >= 476 && ano < 1453 && sigla === termo.DC) {
    return "Idade Média"
  }
  else if (ano >= 1453 && ano < 1789 && sigla === termo.DC) {
    return "Idade Moderna"
  }
  else if (ano >= 1789 && sigla === termo.DC) {
    return "Idade Contemporânea"
  }
  else {
    return "Erro! Valor inválido"
  }
}

//Exercício 7
// valor negativo = vermelho
// valor positivo = preto
// verão = 5%
// inverno = 10%
// banho = 4%
// intimas = 7%
enum Tipo {
  VERAO = "Verão",
  INVERNO = "Inverno",
  BANHO = "Banho",
  INTIMA = "Íntima"
}

type Produto = {
  nome: string,
  preco: number,
  classificacao: Tipo
}

const produto1 = {
  nome: "baby doll",
  preco: 40,
  classificacao: Tipo.INTIMA
}

const produto2 = {
  nome: "jaqueta",
  preco: 140,
  classificacao: Tipo.INVERNO
}

const produto3 = {
  nome: "shorts jeans",
  preco: 80,
  classificacao: Tipo.VERAO
}

const produto4 = {
  nome: "toalha",
  preco: 26,
  classificacao: Tipo.BANHO
}

const produtos: Produto[] = [produto1, produto2, produto3, produto4]

function desconto(produtos: Produto[]): Produto[] {
  const produtoComDesconto = produtos.map((produto) => {
    if (produto.classificacao === Tipo.INTIMA) {
      produto.preco = produto.preco * 0.93
    } else if (produto.classificacao === Tipo.VERAO) {
      produto.preco = produto.preco * 0.95
    } else if (produto.classificacao === Tipo.INVERNO) {
      produto.preco = produto.preco * 0.90
    } else if (produto.classificacao === Tipo.BANHO) {
      produto.preco = produto.preco * 0.96
    }
    return produto
  })
  return produtoComDesconto
}

