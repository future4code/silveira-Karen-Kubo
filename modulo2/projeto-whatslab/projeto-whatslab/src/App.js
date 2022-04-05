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
  width: 100vw;
  align-items: center;

  font-family: "Times New Roman";
  background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);

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


