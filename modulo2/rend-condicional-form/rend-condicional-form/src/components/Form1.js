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



export default class Form1 extends React.Component {

  
  render() {
    return (
      <Container>
        <H1>ETAPA 1 - DADOS GERAIS</H1>
        <H3>1. Qual o seu nome?</H3>
        <Input />

        <H3>2. Qual sua idade?</H3>
        <Input/>

        <H3>3. Qual seu email?</H3>
        <Input/>

        <H3>4. Qual a sua escolaridade?</H3>
        
        <PerguntaMultipla
        respostas={["Ensino médio incompleto", "Ensino médio completo", "Ensino superior incompleto", "Ensino superior completo"]}/>
         

      </Container>
    )
  }
}
