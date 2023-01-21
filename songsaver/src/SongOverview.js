import { React, Component } from "react";
import SongForm from "./components/SongForm";
import SortSection from "./components/sort-components/SortTitle";
import SortRating from "./components/sort-components/SortRating";
import SongTable from "./components/SongTable";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          id: 1,
          title: "stay in live",
          artist: "beegees",
          genre: "pop",
          rating: "4",
        },
        {
          id: 2,
          title: "billi jean",
          artist: "Michael Jackson",
          genre: "Rock",
          rating: "5",
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
        console.log('You have to provide value!!!');
    } else {
        this.setState({songs: [...this.state.songs, song]})
    }
  };

  handleSubmit = (e, song) =>{
    e.preventDefault();
    this.addSong(song);
    e.target.reset();
  };


  removeSong = (event) =>{
   this.setState(prevState => {
    const newSongs = prevState.songs.filter(item => item.id !== event.id);
    return {songs: newSongs}
   });
  };


  sortSongTitle = (e, song) =>{
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

  sortSongRating = (e, song) =>{
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
      <div className="songSaver-container">
        <SongForm
          addSong={this.addSong}
          submit={this.handleSubmit}
          songs={this.state.songs}
        />
        <div className="sort-container">
          <SortSection
            sortTitle={this.sortSongTitle}
            sortRating={this.sortSongRating}
          />
          <SortRating sortRating={this.sortSongRating} />
        </div>
        <SongTable songs={this.state.songs} removeSong={this.removeSong} />
      </div>
    );
  }
}

export default SongOverview;
