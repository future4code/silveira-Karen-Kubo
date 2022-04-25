import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import Logo from './img/Logo-Karen-Kubo.png'
import Background from './img/background.jpg'
import { createGlobalStyle } from 'styled-components';
import AddPlaylist from './components/AddPlaylist';
import AddSongs from './components/AddSongs';

const Global = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
`
const MainScreen = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-image: url(${Background});
  background-size: cover;
`
const ContentScreen = styled.div`
  min-height: 80vh;
`
const Footer = styled.div`

  display: flex;
  justify-content: center;
  height: 10vh;
  min-width: 100vw;

  p{
    font-size: 1em;
  }
`
const Div = styled.div `
  img {
    height: 15vh;
  }
`
const ButtonScreen = styled.div`
  display: flex;
  height: 15vh;
  button { 
    border-radius: 7px;
    box-shadow: 5px 5px 10px;
    height: 5vh;
    align-self: center;;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    cursor: pointer;
    font-size: 2em;
  }
`

const headers = {
  headers: {
    Authorization: "karen-kubo-silveira"
  }
};

export default class App extends React.Component {
  state = {
    switchScreen: "addPlaylist",
    playlists: [],
    inputPlaylist: "",
    idPlaylist: ""

  }

  componentDidMount = () => {
    this.getAllPlaylists();

  }

  getAllPlaylists = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
    axios
      .get(url, headers)
      .then((response) => {
        this.setState({
          playlists: response.data.result.list
        })

      })
      .catch((error) => {
        console.log(error.response.data)
      })
  }

  deletePlaylist = (playlist) => {
    if (window.confirm(`Do you really want to delete this playlist?`) === true) {
      axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}`, headers)
        .then((response) => {
          let newPlaylists = [...this.state.playlists];
          const findIndex = newPlaylists.findIndex((playl) => {
            return playl.name === playlist.name
          });
          newPlaylists.splice(findIndex, 1);
          this.setState({
            playlists: newPlaylists
          })
          alert(`Playlist deleted!`)
        })
        .catch((error) => {
          console.log(error.response.data.message)
        })
    }
  }

  createPlaylist = () => {
    const body = {
      name: this.state.inputPlaylist
    }
    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, headers)
      .then((response) => {
        this.getAllPlaylists();
        this.setState({
          inputPlaylist: ""
        })
        alert(`Done 💃🏼`)
      })
      .catch((error) => {
        alert(error.response.data.message)
      })

  }

  onChangePlaylist = (e) => {
    this.setState({ inputPlaylist: e.target.value })
  }


  switchScreen = () => {
    switch (this.state.switchScreen) {

      case "addSongs":
        return <AddSongs
          playlists={this.state.playlists}
          playlistid={this.state.idPlaylist}
        />

      default:
        return <AddPlaylist
          valuePlaylist={this.state.inputPlaylist}
          onChangePlaylist={this.onChangePlaylist}
          onClickAddPlaylist={this.createPlaylist}
          playlists={this.state.playlists}
          addTracks={this.switchingScreen}
          deletePlaylist={this.deletePlaylist}


        />
    }
  }

  switchingScreen = (id) => {
    this.setState({ switchScreen: "addSongs", idPlaylist: id});
  };

  definingScreen = (screen) => {
    this.setState({ switchScreen: screen});
  };
  render() {
    

    return (
      <>
        <Global />
        <MainScreen>
          <ButtonScreen>
            <Div>
            <img src={Logo} alt="logo" title="Logo de Karen Kubo" />
            </Div>
            <button onClick={() => this.definingScreen("addPlaylist")}>Add a Playlist</button>
          </ButtonScreen>

          <ContentScreen>
            {this.switchScreen()}
          </ContentScreen>
          <Footer>
            <p>© 2022 Developed by Karen Kubo</p>
          </Footer>
        </MainScreen>
      </>
    )
  }
}

