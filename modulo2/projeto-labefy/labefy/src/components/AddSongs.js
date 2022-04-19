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
            console.log(this.state.playlists)
    
          })
          .catch((error) => {
            console.log(error.response.data)
          })
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

      createPlaylistTrack = () => {
        const body = {
            name: this.state.inputTrack,
            artist: this.state.inputSinger,
            url: this.state.inputUrl
        }
        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistid}/tracks`, body, headers)
            .then((response) => {
                this.getPlaylistTracks();
                this.setState({
                    inputTrack: "",
                    inputSinger: "",
                    inputUrl: "",
    
                })
               
                alert(`Track added successfully!`)
            })
            .catch((error) => {
                alert(error.response.message)
            })

    }

    removeTrackFromPlaylist = (trackId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistid}/tracks/${trackId}`, headers).then(() => {
            this.getPlaylistTracks();
        }).catch(err => {
            console.log(err);
        });
    };

    componentDidMount () {
        this.getAllPlaylists();
        this.getPlaylistTracks();
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.tracks !== this.state.tracks) {
            this.getPlaylistTracks();
        }
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

    render() {
        const mapOfPlaylists = this.state.tracks.map ((playlist) => {
            return (
                <Div key={playlist.id}>
                <Span><strong>{playlist.name}</strong> - {playlist.artist}</Span>
                <button onClick={() => this.removeTrackFromPlaylist(playlist.id)}>Remove</button>
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