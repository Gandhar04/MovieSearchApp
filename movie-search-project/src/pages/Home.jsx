import React from 'react'
import SearchForm from '../components/SearchForm'
import MovieList from '../components/MovieList'
import axios from 'axios'
import { apiKey } from '../constants'
import { useLoaderData } from 'react-router-dom'
export async function loader({request}){
  const url = new URL(request.url)
  const searcTerm = url.searchParams.get("search")
  const movieSearchEndpoint = `https://api.themoviedb.org/3/search/movie?query=${searcTerm}&api_key=${apiKey}`
  const data = await axios.get(movieSearchEndpoint)
 console.log(data);
 
  return {movieApiResponse: data.data};
  
}
function Home() {
  const data = useLoaderData()
  return (
    <div>
        <SearchForm />
        <MovieList data={data}/>
    </div>
    
  )
}

export default Home