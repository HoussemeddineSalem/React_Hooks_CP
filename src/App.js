import React from "react";
import MovieData from '../src/components/MovieData';

import MovieList from "../src/components/MovieList";
import NavBar from "./components/NavBar";


function App() {
  const [movieName, setMovieName] = React.useState(MovieData)
  const [titleSearch, setTitleSearch] = React.useState('')
  return (
    <div className="App">
      <NavBar setMovieName={setMovieName} setTitleSearch={setTitleSearch}/>
      <MovieList movieName={movieName} titleSearch={titleSearch}  />
    </div>
  );
}

export default App;
