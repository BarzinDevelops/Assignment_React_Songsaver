import React from "react";
import SubmitButton from "./SubmitButton";

const SongForm = (props) => {
  const newSong = {
    title: "",
    artist: "",
    genre: "",
    rating: "",
    id: props.songs.length + 1,
  };
  return (
    <form
      className="song-form"
      onSubmit={(e) => {
        props.submit(e, newSong);
      }}
    >
      <input
        type="text"
        id="title"
        placeholder="Song Title"
        onBlur={(e) => {
          newSong.title = e.target.value;
        }}
      />

      <input
        type="text"
        id="artist"
        placeholder="Song Artist"
        onBlur={(e) => {
          newSong.artist = e.target.value;
        }}
      />

      <select
        onBlur={(e) => {
          newSong.genre = e.target.value;
        }}
      >
        <option value="none">Choose your genre..</option>
        <option value="Latin">Latin</option>
        <option value="Rap">Rap</option>
        <option value="Pop">Pop</option>
        <option value="Rock">Rock</option>
      </select>

      <select
        onBlur={(e) => {
          newSong.rating = e.target.value;
        }}
      >
        <option value="none">Give your rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <SubmitButton/>
    </form>
  );
};

export default SongForm;
