import React from 'react';
import styled from 'styled-components';
import PerguntaMultipla from './PerguntaMultipla';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`

const H1 = styled.h1`

`

const H3 = styled.h3`

`

const Input = styled.input`

`


export default class Form3 extends React.Component {
  render() {
    return (
        <Container>
        <H1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</H1>
        <H3>5. Por que você não terminou um curso de graduação?</H3>
        <Input/>

        <H3>6. Você fez algum curso complementar?</H3>
        <PerguntaMultipla
        respostas={["Curso técnico", "Curso de Inglês", "Não"]}/>

      </Container>
    )
  }
}