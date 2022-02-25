// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
    var altura = Number(prompt('Digite um número para a altura do retângulo!'));
    var largura = Number(prompt('Digite um número para a largura do retângulo!'));
    let area = altura * largura;
    
    console.log(area);
  }



// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  var anoAtual = Number(prompt('Em que ano estamos? (ex.: 2022)'));
  var anoNascimento = Number(prompt('Em que ano você nasceu? (ex.: 1999)'));
  let idadeAtual = anoAtual - anoNascimento;

  console.log(idadeAtual);
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  //let pesoEmKg = Number(prompt('Qual o seu peso em kg? (ex.: 80)'));
  //let alturaEmM = Number(prompt('Qual sua altura em m? (ex.: 1.80)'));
  let imc = peso / (altura * altura);
  return imc;
  // 85 e 1.8 
  // 70 e 1.65
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nomeUsuario = (prompt('Qual o seu nome?'));
  let idadeUsuario = Number(prompt('Quantos anos você tem?'));
  let emailUsuario = (prompt('Qual o seu e-mail?'));
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`);
  
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt('Me diga sua cor preferida');
  let cor2 = prompt('Me diga sua segunda cor preferida');
  let cor3 = prompt('Me diga sua terceira cor preferida');
  let cores = [cor1, cor2, cor3];
  console.log(cores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(stringMaiuscula) {
  // implemente sua lógica aqui
  let stringNova = stringMaiuscula.toUpperCase();
  return stringNova; //oi e bAnAnA
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  
  let ingressosMinimos = custo / valorIngresso;
  return ingressosMinimos; // cus=3000 e ing=100; cus=5500 e ing=50

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  
    let verifica = string1.length === string2.length;
    return verifica;
  /**string1: "ola"
string2: "abc"
string1: "teste"
string2: "porta" 
string1: "abc"
string2: "abcd"*/

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    // implemente sua lógica aqui
let guardar = array[0];
  return(array[0]) 

  /**array: ["ola","abc"]
      array: ["teste","porta", "batata"]*/
  
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {

  // implemente sua lógica aqui
  
  i = array.length - 1;
  return array[i];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let guarda = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = guarda;

  return array;
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  
  let verifica = string1.toUpperCase() === string2.toUpperCase();
  return verifica;
  /*string1: "Ola"
  string2: "olA
  string1: "bananinha"
  string2: "BANANINHA"
  string1: "banana"
  string2: "BANANINHA" 
  cAsA"
string2: "MeSA*/
}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt('Em que ano estamos? (ex.: 2022)'));
  let anoNascimento = Number(prompt('Em que ano você nasceu? (ex.: 1999)'));
  let anoEmissao = Number(prompt('Em que ano sua carteira de identidade foi emitida? (ex.: 1999)'));
  let idade = anoAtual - anoNascimento
  let renovar = ((anoAtual - anoEmissao) >= 5) && idade <= 20 || ((anoAtual - anoEmissao) >= 10) && idade > 20 && idade <= 50 || ((anoAtual - anoEmissao) >= 15) && idade > 50;
  
console.log(renovar);
};

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  
  let bissexto = ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0;
  return bissexto;

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
let pergunta1 = prompt("Responda sim ou não: Você tem mais de 18 anos?");
let pergunta2 = prompt("Responda sim ou não: Você possui ensino médio completo?");
let pergunta3 = prompt("Responda sim ou não: Você possui disponibilidade exclusiva durante os horários do curso?");

let inscricao = pergunta1.toLowerCase().trim() === "sim".toLowerCase().trim() && pergunta2.toLowerCase().trim() === "sim".toLowerCase().trim() && pergunta3.toLowerCase().trim() === "sim".toLowerCase().trim();
console.log(inscricao);
}