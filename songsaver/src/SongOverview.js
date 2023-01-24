import { React, Component } from "react";
import SongForm from "./components/SongForm";
import SongTable from "./components/SongTable";
import classes from "./SongOverview.module.css";

import SortTitle from "./components/sort-components/SortTitle";
import SortRating from "./components/sort-components/SortRating";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          id: 1,
          title: "Domen zijn bedrog",
          artist: "Marco Borsato",
          genre: "Pop",
          rating: "3",
        },
        {
          id: 2,
          title: "Dust in the Wind",
          artist: "Kansas",
          genre: "Rock",
          rating: "4",
        },
        {
          id: 3,
          title: "Billi Jean",
          artist: "Michael Jackson",
          genre: "Pop",
          rating: "4",
        },
      ],
    };
    this.addSong = this.addSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeSong = this.removeSong.bind(this);
    this.sortSongTitle = this.sortSongTitle.bind(this);
    this.sortSongRating = this.sortSongRating.bind(this);
  }
  addSong = (song) => {
    if (
      song.title === "" ||
      song.artist === "" ||
      song.genre === "" ||
      song.rating === ""
    ) {
      console.log("You have to provide value!!!");
    } else {
      this.setState({ songs: [...this.state.songs, song] });
    }
  };
  handleSubmit = (e, song) => {
    e.preventDefault();
    this.addSong(song);
    e.target.reset();
  };
  removeSong = (event) => {
    this.setState((prevState) => {
      const newSongs = prevState.songs.filter((item) => item.id !== event.id);
      return { songs: newSongs };
    });
  };
  sortSongTitle = (e) => {
    const songAscending = [...this.state.songs].sort((a, b) =>
      a.title > b.title ? 1 : -1
    );
    const songDescending = [...this.state.songs].sort((a, b) =>
      a.title > b.title ? -1 : 1
    );
    e.target.value === "a-z"
      ? this.setState({ songs: songAscending })
      : this.setState({ songs: songDescending });
  };
  sortSongRating = (e) => {
    const ratingAscending = [...this.state.songs].sort(
      (a, b) => a.rating - b.rating
    );
    const ratingDescending = [...this.state.songs].sort(
      (a, b) => b.rating - a.rating
    );
    e.target.value === "1-5"
      ? this.setState({ songs: ratingAscending })
      : this.setState({ songs: ratingDescending });
  };
  render() {
    return (
      <div className={classes["songSaver-container"]}>
        <SongForm
          addSong={this.addSong}
          submit={this.handleSubmit}
          songs={this.state.songs}
        />
        <div className={classes.sortsection}>
          <SortTitle sortTitle={this.sortSongTitle} />
          <SortRating sortRating={this.sortSongRating} />
        </div>
        <SongTable songs={this.state.songs} removeSong={this.removeSong}>
          <div>dit is song table</div>
        </SongTable>
      </div>
    );
  }
}

export default SongOverview;
