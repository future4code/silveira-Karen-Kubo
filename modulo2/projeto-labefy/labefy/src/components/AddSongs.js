import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const headers = {
    headers: {
      Authorization : "karen-kubo-silveira"
    }
  };

    const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `

    const Div1 = styled.div`
    display: flex;
    justify-content: center;
    `

const Span = styled.span`
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    margin: 10px;
`
export default class AddSongs extends React.Component {

    state = {
        idOfPlaylists: "",
        playlists: [],
        tracks: [],
        inputTrack: "",
        inputSinger: "",
        inputUrl: ""
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

      createPlaylistTrack = () => {
        // https://www.youtube.com/embed/NG2zyeVRcbs
        const body = {
            name: this.state.inputTrack,
            artist: this.state.inputSinger,
            url: this.state.inputUrl
        }
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistid}/tracks`, body, headers)
            .then((response) => {
                this.getPlaylistTracks();
               
                alert(`Track added successfully!`)
            })
            .catch((error) => {
                alert(error.response.message)
            })
            this.setState({
                inputTrack: "",
                inputSinger: "",
                inputUrl: "",

            })
    }

    
    onChangeTrack = (e) => {
        this.setState({ inputTrack: e.target.value })
    }

    onChangeSinger = (e) => {
        this.setState({ inputSinger: e.target.value })
    }

    onChangeUrl = (e) => {
        this.setState({ inputUrl: e.target.value })
    }

    componentDidMount () {
        this.getAllPlaylists();
        this.getPlaylistTracks();
    }

    getPlaylistTracks = () => {

        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistid}/tracks`, headers)
            .then((response) => {

                this.setState({
                    tracks: response.data.result.tracks
                })
                console.log(this.state.tracks)
            })
            .catch((error) => {
                console.log(error.response.data)
            })            
    }

   
   
    render() {
        const mapOfPlaylists = this.state.tracks.map ((playlist) => {
            return (
                <Div key={playlist.id}>
                <Span><strong>{playlist.name}</strong> - {playlist.artist}</Span>
                <div>
                <iframe controls autoplay src={playlist.url} height="315" width="560" title="YouTube video player">
                </iframe>
                                
                </div>

                </Div>            
                )

        })

        // console.log(this.props.playlistid)

        return (

            <>
                <Div1>
                <label> Track:
                    <input placeholder='Track' value={this.state.valueTrack} onChange={this.onChangeTrack} />
                </label>

                <label> Artist:
                    <input placeholder='Artist' value={this.state.valueSinger} onChange={this.onChangeSinger} />
                </label>

                <label> URL:
                    <input placeholder='Url/Link' value={this.state.valueUrl} onChange={this.onChangeUrl} />
                </label>

                <button onClick={this.createPlaylistTrack}>Add track</button>
                </Div1>
                {mapOfPlaylists}

            </>
        )
    }
}