import React from "react";

// Esse exemplo demonstra que o React renderiza cada
// componente de um array de componentes quando ele é
// colocado na tela.

// Exercício: Adicione mais uma pessoa à lista de pessoas
// Garanta que viu essa mudança refletida na tela.

class Exemplo1 extends React.Component {
  state = {
    nomes: [<li>Paula</li>, <li>João</li>]
  };

  addNome = () => {
    this.setState({ nomes: [...this.state.nomes, <li>Eu</li>] });
  };

  render() {
    // Array de componentes colocado na variável lista de componentes
    return (
      <div>
        <h1>Exemplo 1</h1>
        <button onClick={this.addNome}>Adicionar</button>
        {/* Abaixo, a variável lista de componentes é colocada na tela.
            Repare que os dois componentes do array aparecem na tela.*/}
        <div>
          <ul>{this.state.nomes}</ul>
        </div>
      </div>
    );
  }
}

export default Exemplo1;
