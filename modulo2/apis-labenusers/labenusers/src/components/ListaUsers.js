import axios from "axios";
import styled from "styled-components";
import React, { Component } from 'react'

const Tela = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const Tela2 = styled.div`
    display: flex;
    height: 50vh;
    justify-content: space-around;
    align-items: center;
    label{ 
        font-size: 1.5em;

    }
    input{
        height: 1.5em;
        background-color: beige;
        border-radius: 6px;
    }
`

const Botao = styled.button`
    background: black;
    border-radius: 10px;
    color: white;
    height: 3em;


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
    p{
        text-align: center;
        font-size: 1.5em;

    }
    input{
        height: 1.5em;
        background-color: beige;
        border-radius: 6px;
    }
`
const DivUsers = styled.div`
    margin-top: 20px;
    box-shadow: -5px -5px 30px 5px salmon, 5px 5px 30px 5px lightblue;
    border-radius: 6px;
    background-color: #faa499;
    background-image: linear-gradient(319deg, #faa499 0%, #f7dd85 37%, #ffc55c 100%);

`

export default class ListaUsers extends Component {
    render() {
        return (
            <Tela>
                <Botao onClick={this.props.irparahome}>Página Inicial</Botao>
                <DivUsers>
                {this.props.users}
                </DivUsers>
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
