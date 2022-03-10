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
 
//Boas-vindas!
console.log("Boas vindas ao jogo de Blackjack!");
//Iniciar jogo
inicio = window.confirm("Quer iniciar uma nova rodada?");
if (inicio === true) {
      startRoundUser();
      startRoundComp();
      resultado(startRoundUser, startRoundComp);
} else if (inicio === false) {
   console.log(`O jogo acabou`);
}
//Começar rodada jogador
function startRoundUser() { 
   
   const carta = comprarCarta(); 
   console.log(`Usuário - cartas: ${carta.texto} - pontuação ${carta.valor}`)
   return carta.valor;
}
//Começar rodada computador
function startRoundComp() {
   const carta = comprarCarta(); 
   console.log(`Computador - cartas: ${carta.texto} - pontuação ${carta.valor}`)
   return carta.valor;
}
//Verificar resultados
function resultado(startRoundUser, startRoundComp) {
   if (startRoundUser > startRoundComp) {
      console.log(`O usuário ganhou!`);
   } else if (startRoundComp > startRoundUser) {
      console.log(`O computador ganhou!`);
   } else if (startRoundUser == startRoundComp) {
      console.log(`Empate!`);
   }
}