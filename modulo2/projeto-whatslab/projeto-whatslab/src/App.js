import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { SecaoComentario } from './components/SecaoComentario';


const GlobalStyle = createGlobalStyle`
margin:0;
padding: 0;
box-sizing: border-box;
`
const MainContainer = styled.div`
height: 100vh;
width: 80vw;
margin: auto;

`



export default class App extends React.Component {
    render() {
      return (
      <MainContainer>
        <GlobalStyle/>

          <SecaoComentario>

          </SecaoComentario>
 
      </MainContainer>
      )
    }
}


