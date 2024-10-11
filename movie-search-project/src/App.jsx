import React from 'react'
import { apiKey } from './constants'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Root from './pages/Root';
import SingleMovieDetailed from './pages/SingleMovieDetailed';
import Error from './pages/Error';
import { loader as movieLoader } from './pages/Home';
function App() {
  console.log(apiKey);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home/>} loader={movieLoader}/>
        <Route path='/error' element={<Error/>}/> 
        <Route path='/detail/:tmdbID' element={<SingleMovieDetailed/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App