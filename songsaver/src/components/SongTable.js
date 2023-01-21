import React from "react";
import Playlist from "./Playlist";

const SongTable = (props) => {
   return(
    <table style={{width:'100%'}} className="playlist">
        <thead>
            <tr className="song-header">
                <th className="song-row__item">Song</th>
                <th className="song-row__item">Artist</th>
                <th className="song-row__item">Genre</th>
                <th className="song-row__item">Rating</th>
                <th className="song-row__item">Delete</th>
            </tr>
        </thead>
        <Playlist songs={props.songs} removeSong={props.removeSong}/>
   </table>
   );
};

export default SongTable;