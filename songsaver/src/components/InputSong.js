import React from "react";
import classes from "./InputSong.module.css";
const InputSong = () => {
    const addSongHandler = (event) => {};
    return (
        <main className={classes['input-card']}>
          <section>
            <form onSubmit={addSongHandler}>
              <div className={classes.control}>
                <input type='text' id='title' placeholder="Song Title" />
              </div>
              <div className={classes.control}>
                <input type='text' id='artist' placeholder="Song Artist" />
              </div>
              <div className={classes.selectors}>
                <select>
                    <option value="none" >Choose your genre..</option>
                    <option value="Latin">Latin</option>
                    <option value="Rap">Rap</option>
                    <option value="Pop">Pop</option>
                    <option value="Rock">Rock</option>
                </select>
              </div>
              <div className={classes.selectors}>
                <select>
                    <option value="none" >Give your rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
              </div>
                <div className={classes['add-btn']}>
                    <button>Add Song</button>
                </div>
              
            </form>
          </section>
        </main>
      );
};

export default InputSong;