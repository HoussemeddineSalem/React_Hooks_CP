import React from 'react';
import MovieCard from "./MovieCard";

function MovieList({movieName, titleSearch}) {

    const search = () => {
       return movieName.filter(
            (film) => {
              return  film.title.toLowerCase().includes(titleSearch.toLowerCase())
                      }
                        )

}
return <div style={{display: 'flex',flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap'}}>

    {search().map((movie) => <MovieCard movie={movie} />)}
    </div>
    

}


export default MovieList