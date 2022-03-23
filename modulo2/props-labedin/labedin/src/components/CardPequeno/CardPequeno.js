import React from 'react';
import styled from 'styled-components';

const DivContatos = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid black;
width: 40vw;
`

const Texto = styled.p `
text-align: center;
`
const Texto1 = styled.span `
text-align: center;
`

const Imagem1 = styled.img`
width: 30px;
margin-right: 10px;
`
const Imagem2 = styled.img`
width: 30px;
margin-right: 10px;
`

function CardPequeno (props) {
    return (
        <DivContatos className="contatos-container">
            <Texto><strong>Contato:</strong></Texto>
            <Imagem1 src={ props.imagememail }/>
            <Texto1> E-mail: { props.email }</Texto1><br/>
            <Imagem2 src={ props.imagemcel }/>
            <Texto1> Celular: { props.celular }</Texto1>
        </DivContatos>

    )
}

export default CardPequeno;