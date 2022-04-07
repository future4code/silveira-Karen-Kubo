import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import Logo from './img/Logo-Karen-Kubo.png'
import { createGlobalStyle } from 'styled-components';
import AddPlaylist from './components/AddPlaylist';
import Home from './components/Home';
import AddSongs from './components/AddSongs';

const Global = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

`
const MainScreen = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`
const ContentScreen = styled.div`
  min-height: 80vh;
`
const Footer = styled.div`
  background-color: beige;
  display: flex;
  justify-content: center;
  height: 10vh;
  min-width: 100vw;
  position: fixed;
  bottom: 0;
`
const ButtonScreen = styled.div`
  background-color: beige;
  display: flex;
  justify-content: space-between;
  height: 15vh;
  button { 
    height: 5vh;
    align-self: center;
    border: none;
    background: none;
    cursor: pointer;
  }
`

const headers = {
  headers: {
    Authorization: "karen-kubo-silveira"
  }
};

export default class App extends React.Component {
  state = {
    switchScreen: "home",
    playlists: [],
    inputPlaylist: "",
    inputTrack: "",
    inputSinger: "",
    inputUrl: ""
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
        console.log(this.state.playlists)
      })
      .catch((error) => {
        console.log(error.response.data)
      })
  }

  getPlaylistTracks = (playlist) => {

    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks`, headers)
      .then((response) => {
        console.log(response.data)
        
      .catch((error) => {
        console.log(error.response.data)
      })
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

  onChangeTrack = (e) => {
    this.setState({ inputTrack: e.target.value })
  }

  onChangeSinger = (e) => {
    this.setState({ onChangeSinger: e.target.value })
  }

  onChangeUrl = (e) => {
    this.setState({ inputUrl: e.target.value })
  }


  switchScreen = () => {
    switch (this.state.switchScreen) {
      case "addPlaylist":
        return <AddPlaylist
          valuePlaylist={this.state.inputPlaylist}
          onChangePlaylist={this.onChangePlaylist}
          onClickAddPlaylist={this.createPlaylist}
          playlists={this.state.playlists}
        />

      case "addSongs":
        return <AddSongs
          valueTrack={this.state.inputTrack}
          onChangeTrack={this.onChangeTrack}
          valueSinger={this.state.inputSinger}
          onChangeSinger={this.onChangeSinger}
          valueUrl={this.state.inputUrl}
          onChangeUrl={this.onChangeUrl}
          onClickAddTrack={() => { }}
          playlists={this.state.playlists}
        />

      default:
        return <Home />
    }
  }

  definingScreen = (screen) => {
    this.setState({ switchScreen: screen });
  };

  render() {


    return (
      <>
        <Global />
        <MainScreen>
          <ButtonScreen>
            <img src={Logo} alt="logo" title="Logo de Karen Kubo" />
            <button onClick={() => this.definingScreen("home")}>Home</button>
            <button onClick={() => this.definingScreen("addPlaylist")}>Add Playlist</button>
            <button onClick={() => this.definingScreen("addSongs")}>Add tracks to the playlist</button>
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

