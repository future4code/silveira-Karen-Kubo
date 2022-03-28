import React from 'react';
import styled from 'styled-components';

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




export default class Form2 extends React.Component {
  render() {
    return (
        <Container>
        <H1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</H1>
        <H3>5. Qual curso?</H3>
        <Input/>

        <H3>6. Qual a unidade de ensino?</H3>
        <Input/>

      </Container>
    )
  }
}