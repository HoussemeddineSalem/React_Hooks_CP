import React from "react";
import MovieData from '../src/components/MovieData';

import MovieList from "../src/components/MovieList";
import NavBar from "./components/NavBar";


function App() {
  const [movieName, setMovieName] = React.useState(MovieData)
  const [titleSearch, setTitleSearch] = React.useState('');
  const [ratingSearch,setRatingSearch] = React.useState(0)
  return (
    <div className="App">
      <NavBar 
      
      titleSearch={titleSearch}
      ratingSearch ={ratingSearch} 
      movieName={movieName} 
      setMovieName={setMovieName} 
      setTitleSearch={setTitleSearch} 
      setRatingSearch={setRatingSearch}

      />
      <MovieList 
      movieName={movieName} 
      titleSearch={titleSearch} 
      ratingSearch={ratingSearch}  

      />
    </div>
  );
}

export default App;
