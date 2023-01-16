import { Fragment } from "react";
import Header from "./components/Header";
import InputSong from "./components/InputSong";
import Playlist from "./components/Playlist";

function App() {

  return (
    <Fragment>
      <Header />
      <InputSong />
      <Playlist />
    </Fragment>
  );
}

export default App;
