// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
       return array.sort(function(a, b) {
        if (a < b) {
            return -1;
          }
        if (a > b) {
            return 1;
          }
        return 0;
    });
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numerosPares = [];
    for (let numero of array) {
        if (numero % 2 === 0) {
            numerosPares.push(numero);
        }
    }
        return numerosPares;       
    
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const arrayPar = array.filter((numero) => {
        return numero % 2 === 0;
    });

    let numerosElevadosADois = [];
    for (let numero of arrayPar) {
        numerosElevadosADois.push(numero*numero)
    }
    return numerosElevadosADois;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let numeroAleatorio = -Infinity;
    for (let numero of array) {
        if (numero > numeroAleatorio) {
            numeroAleatorio = numero;
        } 
    }
  return numeroAleatorio;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    function descobreMaior (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {return num1}
}

    function descobreMenor (num1, num2) {
        if (num1 < num2) {
            return num1;
        } else if (num2 < num1) {
            return num2;
        }
        else {return num1}
    }

return {
    maiorNumero: descobreMaior(num1, num2),
    maiorDivisivelPorMenor: descobreMaior(num1, num2) % descobreMenor (num1, num2) === 0,
    diferenca: descobreMaior(num1, num2) - descobreMenor (num1, num2)
}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let array = [];
   
   for (let i = 0; array.length < n; i++) {
       if (i % 2 === 0) {
           array.push(i)
       }
   }

   return array;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return `Equilátero`
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        return `Escaleno`
    } else {
        return `Isósceles`
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let maior = -Infinity
    let menor = Infinity
    let segundoMaior = -Infinity
    let segundoMenor = Infinity
    let arrayDosDoisNumeros = []

    for (let num of array) {
        if (num < menor) {
            menor = num
        }
        if (num > maior) {
            maior = num
        }
    }

    for (let num of array) {
        if (num < segundoMenor && num !== menor) {
            segundoMenor = num
        }
        if (num > segundoMaior && num !== maior) {
            segundoMaior = num
        }
    }

    arrayDosDoisNumeros = [segundoMaior, segundoMenor]
    return arrayDosDoisNumeros
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let array = {... pessoa, nome:"ANÔNIMO"}
   return array;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const pessoasAutorizadas = pessoas.filter((pessoa) => {
       return pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade <= 60
   })
   return pessoasAutorizadas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutorizadas = pessoas.filter((pessoa) => {
        return pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade > 60
    })
    return pessoasNaoAutorizadas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    const contasAtualizado = contas.map((conta) => {
        let soma = 0;
        for (let i = 0; i < conta.compras.length; i++) {
            soma += conta.compras[i]
        }
        let novoSaldo = conta.saldoTotal - soma
       
        return {...conta, saldoTotal: novoSaldo, compras:[]};
    })
    return contasAtualizado;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  const nomesAlfab = consultas.map((consulta) => {
      return consulta.nome.sort();
  })
  return nomesAlfab;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}