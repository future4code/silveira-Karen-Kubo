import React from 'react';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import Post from './components/Post/Post';

const GlobalStyle = createGlobalStyle`
  margin: 0;  
  padding: 0;
  box-sizing: border-box;

`
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`
const ContainerFilho = styled.div`
  display:flex;
  /* border: 2px solid black; */
`
const P = styled.p`
  width: 10vw;
`
const Input = styled.input`
  width: 30vw;
  margin: 3px 3px;
  padding: 0.2rem;
  border-style: ridge;
  border-radius: 5px;

`
const Button = styled.button`
  color: white;  
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  border-radius: 5px;
  width: 10vw;
  height: 2rem;
  align-self: center;
`

class App extends React.Component {
  state = {
    posts: 
    [{
      nomeUsuario: 'usuario1',
      fotoUsuario:'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
    },
    {
      nomeUsuario: 'usuario2',
      fotoUsuario: 'https://picsum.photos/id/237/200/300',
      fotoPost: 'https://picsum.photos/25/150'
    }, 
    {
      nomeUsuario: 'usuario3',
      fotoUsuario: 'https://picsum.photos/10/50',
      fotoPost: 'https://picsum.photos/500/150'
    }],
    valorInputUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
 
}

  onChangeInputUsuario = (e) => {
    this.setState({valorInputUsuario: e.target.value});
  }

  onChangeInputFotoUsuario = (e) => {
    this.setState({valorInputFotoUsuario: e.target.value});
  }  
  
  onChangeInputFotoPost = (e) => {
    this.setState({valorInputFotoPost: e.target.value});
  }

  onClickAdiciona = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost

    };
    const novoPosts = [...this.state.posts, novoPost]
    this.setState({ 
    posts: novoPosts,       
    valorInputFotoPost: '',
    valorInputFotoUsuario: '',
    valorInputUsuario: '' 
  })
  }

  render() {

    const listaDePosts = this.state.posts.map((post) => {
      return (
      
      <Post
          
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />

      )
    }
    )

    return (
      <MainContainer>
        <GlobalStyle/>
        <Container>
          <ContainerFilho>
          <P>Usuário:</P>
          <Input
          onChange={this.onChangeInputUsuario}
          value={this.state.valorInputUsuario} 
          placeholder={'Digite um nome de usuário'}
          />
          </ContainerFilho>

          <ContainerFilho>
          <P>URL Foto de Usuário:</P>
          <Input 
          onChange={this.onChangeInputFotoUsuario}
          value={this.state.valorInputFotoUsuario} 
          placeholder={'Digite o URL da sua foto de usuário'}
          />
          </ContainerFilho>

          <ContainerFilho>
          <P>URL Foto do Post:</P>
          <Input 
          onChange={this.onChangeInputFotoPost}
          value={this.state.valorInputFotoPost} 
          placeholder={'Digite o URL da foto do seu post'}
          />
          </ContainerFilho>

          <Button onClick={this.onClickAdiciona}>Adicionar</Button>
        </Container>

        {listaDePosts}
        

      </MainContainer>

    );
  }
}

export default App;
