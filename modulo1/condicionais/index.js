// -----------Exercícios de interpretação de código
//1A - VERIFICAR SE O N° ESCOLHIDO PELO USUARIO É PAR, SE FOR, ELE PASSOU NO TESTE E COLOCA NO CONSOLE.
//1B - PARES
//1C - ÍMPARES

//2A - VERIFICAR SE FRUTA É IGUAL A UMA DAS OPÇÕES LISTADAS, SE FOR, ELA TERÁ UM PREÇO E RETORNARÁ NO CONSOLE UMA FRASE COM O VALOR E A FRUTA ESCOLHIDA.
//2B - O preço da fruta Maçã é R$ 2.25
//2C - O preço da fruta Pêra é R$ 5

//3A - Pedindo para o usuário inserir um n° e o convertendo para number/
//3B - Para 10 = "Esse número passou no teste" e mensagem is not defined; 
// Para -10 = Aparece apenas o erro de que mensagem não foi definida.
//3C - Sim, pois a variável mensagem existe apenas no escopo pai, ela não foi retornada, portanto, não existe no escopo global.

// -----------------------Exercícios de escrita de código

//1
/*let idade = Number(prompt("Quantos anos você tem?"));

if (idade >= 18) {
    console.log("Você pode dirigir");
} else {console.log("Você não pode dirigir.");};

//2
let turno = prompt("Qual turno você estuda? Digite M para matutino, V para vespertino ou N para noturno!").toUpperCase().trim();

if (turno === "M") {
    console.log("Bom Dia!");
} else if (turno === "V") {
    console.log("Boa Tarde!");
} else if (turno === "N") {
    console.log("Boa Noite!");
};

//3
switch (turno) {
    case "M":
        console.log("Bom Dia!");
     break;
    case "V":
        console.log("Boa Tarde!");
        break;
    case "N":
        console.log("Boa Noite!");
        break;
};

//4
let genero = prompt("Qual o gênero do filme?").toLowerCase().trim();
let precoIngresso = Number(prompt("Qual o preço do ingresso?"));

if (genero === "fantasia" && precoIngresso < 15) {
    console.log("Bom filme!");
} else { console.log ("Escolha outro filme :(")};

//------------DESAFIOS
//1
if (genero === "fantasia" && precoIngresso < 15) {
    let lanchinho = prompt("Qual lanchinho você irá comprar no cinema?").toLowerCase().trim();
    console.log("Bom filme!");
    console.log(`Aproveite o seu/a sua ${lanchinho}.`);
} else { console.log ("Escolha outro filme :(")};
*/
//2
let nomeCompleto = prompt("Qual o seu nome completo?");
let tipoDeJogo = prompt("Qual o tipo de jogo? Responda IN para internacional ou DO para doméstico").toUpperCase().trim();
let etapaDoJogo = prompt("Qual a etapa do jogo? Responda com: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final").toUpperCase().trim();
let categoria = Number(prompt("Qual a categoria? Responda com: 1, 2, 3 ou 4"));
let qtdIngressos = Number(prompt("Quantos ingressos você irá comprar?"));

console.log(`---Dados da compra ---`);
console.log(`Nome do cliente: ${nomeCompleto}`);
if (tipoDeJogo === "IN") {
    console.log(`Tipo do jogo: Internacional`)
} else if (tipoDeJogo === "DO") {
    console.log(`Tipo do jogo: Nacional`)
};

if (etapaDoJogo === "SF") {
    console.log(`Etapa do jogo: Semi-final`)
} else if (etapaDoJogo === "DT") {console.log(`Etapa do jogo: Decisão de terceiro lugar`)}
    else if (etapaDoJogo === "FI") {console.log(`Etapa do jogo: Final`)};

console.log(`Categoria: ${categoria}`);
console.log(`Quantidade de Ingressos: ${qtdIngressos}`);
console.log(`--- Valores da compra ---`);
//NACIONAL
if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 1) {
    valorDoIngresso = 1320
    console.log(`Valor do Ingresso: R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$ ${valorDoIngresso * qtdIngressos}`)
}
else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 2) {
    valorDoIngresso = 880
    console.log(`Valor do Ingresso: R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$ ${valorDoIngresso * qtdIngressos}`)
}
else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 3) {
    valorDoIngresso = 550
    console.log(`Valor do Ingresso: R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$ ${valorDoIngresso * qtdIngressos}`)
}
else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 4) {
    valorDoIngresso = 220
    console.log(`Valor do Ingresso: R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$ ${valorDoIngresso * qtdIngressos}`)
}
else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 1) {
    valorDoIngresso = 660
    console.log(`Valor do Ingresso: R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$ ${valorDoIngresso * qtdIngressos}`)
}
else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 2) {
    valorDoIngresso = 440
    console.log(`Valor do Ingresso: R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$ ${valorDoIngresso * qtdIngressos}`)
}
else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 3) {
    valorDoIngresso = 330
    console.log(`Valor do Ingresso: R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$ ${valorDoIngresso * qtdIngressos}`)
}
else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 4) {
    valorDoIngresso = 170
    console.log(`Valor do Ingresso: R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$ ${valorDoIngresso * qtdIngressos}`)
}
else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 1) {
    valorDoIngresso = 1980
    console.log(`Valor do Ingresso: R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$ ${valorDoIngresso * qtdIngressos}`)
}
else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 2) {
    valorDoIngresso = 1320
    console.log(`Valor do Ingresso: R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$ ${valorDoIngresso * qtdIngressos}`)
}
else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 3) {
    valorDoIngresso = 880
    console.log(`Valor do Ingresso: R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$ ${valorDoIngresso * qtdIngressos}`)
}
else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 4) {
    valorDoIngresso = 330
    console.log(`Valor do Ingresso: R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$ ${valorDoIngresso * qtdIngressos}`)
}



//INTERNACIONAL
else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 1) {
    valorDoIngresso = 1320 * 4.10
    console.log(`Valor do Ingresso: U$ ${valorDoIngresso}`)
    console.log(`Valor total: U$ ${valorDoIngresso * qtdIngressos}`)
}
else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 2) {
    valorDoIngresso = 880 * 4.10
    console.log(`Valor do Ingresso: U$ ${valorDoIngresso}`)
    console.log(`Valor total: U$ ${valorDoIngresso * qtdIngressos}`)
}
else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 3) {
    valorDoIngresso = 550 * 4.10
    console.log(`Valor do Ingresso: U$ ${valorDoIngresso}`)
    console.log(`Valor total: U$ ${valorDoIngresso * qtdIngressos}`)
}
else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 4) {
    valorDoIngresso = 220 * 4.10
    console.log(`Valor do Ingresso: U$ ${valorDoIngresso}`)
    console.log(`Valor total: U$ ${valorDoIngresso * qtdIngressos}`)
}
else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 1) {
    valorDoIngresso = 660 * 4.10
    console.log(`Valor do Ingresso: U$ ${valorDoIngresso}`)
    console.log(`Valor total: U$ ${valorDoIngresso * qtdIngressos}`)
}
else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 2) {
    valorDoIngresso = 440 * 4.10
    console.log(`Valor do Ingresso: U$ ${valorDoIngresso}`)
    console.log(`Valor total: U$ ${valorDoIngresso * qtdIngressos}`)
}
else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 3) {
    valorDoIngresso = 330 * 4.10
    console.log(`Valor do Ingresso: U$ ${valorDoIngresso}`)
    console.log(`Valor total: U$ ${valorDoIngresso * qtdIngressos}`)
}
else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 4) {
    valorDoIngresso = 170 * 4.10
    console.log(`Valor do Ingresso: U$ ${valorDoIngresso}`)
    console.log(`Valor total: U$ ${valorDoIngresso * qtdIngressos}`)
}
else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 1) {
    valorDoIngresso = 1980 * 4.10
    console.log(`Valor do Ingresso: U$ ${valorDoIngresso}`)
    console.log(`Valor total: U$ ${valorDoIngresso * qtdIngressos}`)
}
else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 2) {
    valorDoIngresso = 1320 * 4.10
    console.log(`Valor do Ingresso: U$ ${valorDoIngresso}`)
    console.log(`Valor total: U$ ${valorDoIngresso * qtdIngressos}`)
}
else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 3) {
    valorDoIngresso = 880 * 4.10
    console.log(`Valor do Ingresso: U$ ${valorDoIngresso}`)
    console.log(`Valor total: U$ ${valorDoIngresso * qtdIngressos}`)
}
else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 4) {
    valorDoIngresso = 330 * 4.10
    console.log(`Valor do Ingresso: U$ ${valorDoIngresso}`)
    console.log(`Valor total: U$ ${valorDoIngresso * qtdIngressos}`)
}