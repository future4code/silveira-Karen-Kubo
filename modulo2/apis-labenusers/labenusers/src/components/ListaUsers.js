import axios from "axios";
import styled from "styled-components";
import React, { Component } from 'react'

const Tela = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Botao = styled.button`
    background: black;
    border-radius: 10px;
    color: white;


    :hover {
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    }

    :before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

    :active {
        color: #000
    }

    :active:after {
    background: transparent;
    }   

    :hover:before {
    opacity: 1;
}
    :after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}
`

const Div = styled.div`

`

export default class ListaUsers extends Component {
    render() {
        return (
            <Tela>
                <Botao onClick={this.props.irparahome}>Página Inicial</Botao>
                {this.props.users}
                <Div>
                    <p>Procurar usuários:</p>
                    <input
                        placeholder="Nome"
                        onChange={this.props.onChangeBusca}
                        value={this.props.valueBusca} />
                    <Botao onClick={this.props.filtrarUsers}>Pesquisar</Botao>

                </Div>

            </Tela>
        )
    }
}
