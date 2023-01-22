import React from "react";
import Button from "./Button";
import classes from "./SongForm.module.css";

const SongForm = (props) => {
  const newSong = {
    title: "",
    artist: "",
    genre: "",
    rating: "",
    id: props.songs.length + 1,
  };
  return (
    <div className={classes["input-card"]}>
      <form
        className={classes.form}
        onSubmit={(e) => {
          props.submit(e, newSong);
        }}
      >
        <div className={classes.control}>
          <input
            type="text"
            id="title"
            placeholder="Song Title"
            onBlur={(e) => {
              newSong.title = e.target.value;
            }}
          />
          </div>
<div className={classes.control}>
          <input
            type="text"
            id="artist"
            placeholder="Song Artist"
            onBlur={(e) => {
              newSong.artist = e.target.value;
            }}
          />
          </div>
        <div className={classes.selectors}>
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
        </div>
        <div className={classes.selectors}>
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
          <option value="5">5</option>
        </select>
        </div>
        <Button name={'Add Song'} />
      </form>
    </div>
  );
};

export default SongForm;
