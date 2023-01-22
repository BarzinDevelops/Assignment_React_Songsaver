import React from "react";
import ListItem from "./ListItem";
const Playlist = (props) => {
  return (
    <tbody>
      {props.songs.map((song) => {
        return (
          <ListItem key={song.id} song={song} removeSong={props.removeSong} />
        );
      })}
    </tbody>
  );
};

export default Playlist;
