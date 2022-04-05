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

const P = styled.p`

`

export default class FormFinal extends React.Component {
  render() {
    return (
        <Container>
        <H1>O FORMULÁRIO ACABOU</H1>
        <P>Muito obrigado por participar! Entraremos em contato!</P>

      </Container>
    )
  }
}