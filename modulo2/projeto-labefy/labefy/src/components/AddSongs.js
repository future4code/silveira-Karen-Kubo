import React from 'react';
import styled from 'styled-components';

export default class AddSongs extends React.Component {
    render() {
        const mapOfPlaylistsNames = this.props.playlists.map((playlist) => {
            return (
                <option value={playlist.id}>{playlist.name}</option>
            )
        })

        return (

            <>  
                <p>Selecione uma playlist:</p>
                <select>
                {mapOfPlaylistsNames}
                </select>
                <label> Track: 
                    <input name='song' value={this.props.valueTrack} onChange={this.props.onChangeTrack} />
                </label>

                <label> Artist:
                    <input name='Playlist' value={this.props.valueSinger} onChange={this.props.onChangeSinger} />
                </label>

                <label> URL:
                    <input name='Playlist' value={this.props.valueUrl} onChange={this.props.onChangeUrl} />
                </label>

                <button onClick={this.props.onClickAddTrack}>Add track</button>

            </>
        )
    }
}