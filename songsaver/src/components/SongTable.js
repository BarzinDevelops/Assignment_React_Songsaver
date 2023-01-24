import React from "react";
import Playlist from "./Playlist";
import classes from "./SongTable.module.css";

const SongTable = (props) => {
  return (
    <table className={classes["table-container"]}>
      <thead>
        <tr className="song-header">
          <th className="song-row__item"></th>
          <th className="song-row__item">Title</th>
          <th className="song-row__item">Artist</th>
          <th className="song-row__item">Genre</th>
          <th className="song-row__item">Rating</th>
          <th className="song-row__item"></th>
        </tr>
      </thead>
      <Playlist songs={props.songs} removeSong={props.removeSong} />
    </table>
  );
};

export default SongTable;
