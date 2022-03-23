import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'fotinho1'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

      <Post
          nomeUsuario={'fotinho2'}
          fotoUsuario={'https://picsum.photos/id/237/200/300'}
          fotoPost={'https://picsum.photos/25/150'}
        />

      <Post
          nomeUsuario={'fotinho3'}
          fotoUsuario={'https://picsum.photos/10/50'}
          fotoPost={'https://picsum.photos/500/150'}
        />
      </MainContainer>

    );
  }
}

export default App;
