/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
let cartaUser = [];
let cartaComp = [];
const cartas = comprarCarta();


//Iniciar jogo
inicio = window.confirm("Quer iniciar uma nova rodada?");
if (inicio === true) {
      console.log("Boas vindas ao jogo de Blackjack!");
      //sortear cartas
      let cartasIniciais = false;
      while (!cartasIniciais) {
         cartaUser.push(comprarCarta());
         cartaUser.push(comprarCarta());
         cartaComp.push(comprarCarta());
         cartaComp.push(comprarCarta());
            if ((cartaUser[0].valor === 11 && cartaUser[1].valor === 11) ||(cartaComp[0].valor === 11 && cartaComp[1].valor === 11)) {
               cartaUser = [];
               cartaComp = [];
            } else {
               cartasIniciais = true;
            }
      }
let pegarCartas = true;

while (pegarCartas) {
   let textos = "";
   let pontos = 0;
   for (let carta of cartaUser) {
      textos += carta.texto + " "
      pontos += carta.valor
   }

if (pontos > 21) {
   pegarCartas = false;
} else {
   let pegarMaisCartas = window.confirm(`Suas cartas são ${textos}. A carta revelada do computador é ${cartaComp[0].texto}. \nDeseja comprar mais uma carta?`);
   if (pegarMaisCartas === true) {
      cartaUser.push(comprarCarta());
   } else {
         pegarCartas = false;
   }
}
};

let pontosComp = 0;
let textosComp = "";
let pontosUser = 0;
let textosUser = "";


for (let carta of cartaUser) {
   textosUser += carta.texto + " "
   pontosUser += carta.valor
}

for (let carta of cartaComp) {
   textosComp += carta.texto + " "
   pontosComp += carta.valor
};

if (pontosUser <= 21) {
   while (pontosUser > pontosComp && pontosComp <= 21) {
      cartaComp.push(comprarCarta());
      let pontosComp = 0;
      let textosComp = "";
      for (let carta of cartaComp) {
         textosComp += carta.texto + " "
         pontosComp += carta.valor
      }
   }
}

let mensagem = ""
if (pontosUser > pontosComp && pontosUser <= 21){
   mensagem = "O usuário ganhou!"
} else if (pontosComp > pontosUser && pontosComp <= 21){
   mensagem = "O computador ganhou!"
} else if (pontosComp > 21 && pontosUser <= 21){
   mensagem = "O usuário ganhou!"
} else if (pontosUser > 21 && pontosComp <= 21){
   mensagem = "O computador ganhou!"
} else {
   mensagem = "Empate!"
}

alert(`Usuário - Cartas: ${textosUser} - Pontuação: ${pontosUser} \nComputador - Cartas: ${textosComp} - Pontuação: ${pontosComp} \n${mensagem}`);


} else if (inicio === false) {
   console.log(`O jogo acabou`);
}




