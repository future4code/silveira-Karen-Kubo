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
    let array1 = [];
    let numeroAleatorio = 0;
    let min = Math.min(...array);
    let max = Math.max(...array);
    array.splice(array.indexOf(min), 1);
    array.splice(array.indexOf(max), 1);

    const descobreMaior = (array) => {
        for (let numero of array) {
            if (numero > numeroAleatorio) {
                numeroAleatorio = numero
            }
        }
        return numeroAleatorio;
    }

    const descobreMenor = (array)=> {
        for (let numero of array) {
            if (numero < numeroAleatorio) {
                numeroAleatorio = numero
            }
        }
        return numeroAleatorio;
    }

    array1.push(descobreMaior);
    array1.push(descobreMenor);
    return array1;

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
       return pessoa.altura >= 1.5 && pessoa.idade >= 14    
   })
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}