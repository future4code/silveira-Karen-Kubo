import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  align-items: center;
  button { 
    height: 5vh;
    cursor: pointer;
  }
`

export default class AddPlaylist extends React.Component {
    render() {
        const mapOfPlaylists = this.props.playlists.map((playlist) => {
            return (
              <>
                <Div key={playlist.id}>
                  <p>{playlist.name}</p>
                  <button onClick={() => this.deletePlaylist(playlist)}>Remove</button>
                </Div>
              </>
            )
          })

        return (
            <>
                <label> Playlist
                <input name='Playlist' value={this.props.valuePlaylist} onChange={this.props.onChangePlaylist}/>
                </label>
                <button onClick={this.props.onClickAddPlaylist}>Add</button>
                
                {mapOfPlaylists}
            </>
        )
    }
}
