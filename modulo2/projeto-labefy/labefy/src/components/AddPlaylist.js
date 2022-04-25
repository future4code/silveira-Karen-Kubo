import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  margin: auto;
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

  button { 
    height: 5vh;
    cursor: pointer;
    margin-left: 20px;
  }
`

export default class AddPlaylist extends React.Component {
    render() {
        const mapOfPlaylists = this.props.playlists.map((playlist) => {
            return (
              
                <Div key={playlist.id}>
                  <p>{playlist.name}</p>
                  <button onClick={() => this.props.deletePlaylist(playlist)}>Remove</button>
                  <button onClick={() => this.props.addTracks(playlist.id)}>Add tracks</button>
                </Div>
              
            )
          })

        return (
            <>
            <Div>
                <label> Playlist
                <input name='Playlist' value={this.props.valuePlaylist} onChange={this.props.onChangePlaylist}/>
                </label>
                <button onClick={this.props.onClickAddPlaylist}>Add</button>
                </Div>
                {mapOfPlaylists}
            </>
        )
    }
}
