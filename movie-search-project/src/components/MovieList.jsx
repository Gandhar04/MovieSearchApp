import React from 'react'
import axios from 'axios'
function MovieList({data}) {
  console.log(data);
  const {movieApiResponse} =data
  if (movieApiResponse && movieApiResponse.total_results===0 ) {
    return <h1>No Movie Found</h1>
  }
  return (
    <div>
      {movieApiResponse.results.map((movie)=> 
        <p>{movie.title}</p>
      )}
    </div>
  )
}

export default MovieList