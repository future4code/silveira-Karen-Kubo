import React from 'react';
// import './App.css';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import FormFinal from './components/FormFinal';
import PerguntaMultipla from './components/PerguntaMultipla';





const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

`
const MainContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Botao = styled.button`
    margin-top: 30px;
`

export default class App extends React.Component{
  state = {
    etapa: 1
  }

  verificaEtapa = () => {
    switch (this.state.etapa) {
      case 1: return <Form1 />;

      case 2: return <Form2 />;

      case 3: return <Form3 />;

      default: return (<FormFinal />);

    }

  }

  proximaEtapa = () => {
    
    let newLocal = this.state.etapa + 1;
    this.setState({etapa: newLocal});
    
    }
  
  
  botao = () => {
    return this.state.etapa !== 4 ? <Botao onClick={this.proximaEtapa}>Próxima Etapa</Botao> : `🙂`
  }

  render () {
  
  return (
    <>
    <MainContainer>
      <GlobalStyle/>
      {this.verificaEtapa()}

      {this.botao()}

    </MainContainer>
    </>
  )
 }
};