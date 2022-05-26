// a e b)
type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}
//c) Criaria no package.json o caminho para iniciar, se o arquivo estiver dentro do src o caminho do tsc seria diferente (tsc ./src/exercicio4.ts)

// d) Pode-se rodar o comando tsc pra transpilar vários arquivos: tsc index.js exercicio4.ts
