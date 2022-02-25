// -----------Exercícios de interpretação de código
//1
//Irá aparecer o apelido individual de cada uma, nome e depois o array total (em cada bloco)


//2 ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

//3  ["Mandi", "Laura"]

// -----------Exercícios de escrita de código
//1
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ];
 //a
 const nomes = pets.map ((pet) => {
        return pet.nome
 })
console.log(nomes);
//b
const apenasSalsichas = pets.filter((pet) => {
        return pet.raca === "Salsicha";
})
console.log(apenasSalsichas);
//c **

const mensagem = pets.map((pet) =>{
    if (pet.raca === "Poodle") {
      
       pet.mensagem = `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`
        return pet.mensagem;
    }
});
const mensagemPoodle = pets.filter((pet) => {
    if (pet.mensagem === `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`) 
    {return pet.mensagem} else 
    {return false}
});

console.log(mensagemPoodle);

//2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 //a
 const itens = produtos.map ((item) => {
    return item.nome
})
console.log(itens);
//2b **

const precos = produtos.map((item) => {
    let i=0;
    item.preco = (item.preco * 0.95).toFixed(2)
    
    return item
})
console.log(precos);
//c
const objetos = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})
console.log(objetos);

//d
const ype = produtos.filter((item) => {
if (item.nome.includes("Ypê")) {
        return item.nome
} 
});
console.log(ype);

//e
const novoArray = ype.map((item) => {
    for (i = 0; i < ype.length; i++) {
        let frase = `Compre ${item.nome} por ${item.preco}`
        return frase
    }
})
console.log(novoArray);
// -----------Desafio
//1
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 const ordemAlfabetica = pokemons.sort((a, b) => { 
    return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
 });
     console.log(ordemAlfabetica);


     //1b
 const tiposSemRepetir = pokemons.map(pokemon => pokemon.tipo);
 const unicos = [... new Set(tiposSemRepetir)];
 console.log(unicos);
        