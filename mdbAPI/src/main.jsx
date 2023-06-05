import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import TopMovies from './pages/TopMovies.jsx'
import Upcoming from './pages/Upcoming.jsx'
import Popular from './pages/Popular.jsx'
import NowPlaying from './pages/NowPlaying.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/Search.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='top_movies' element={<TopMovies />}/>
          <Route path='upcoming' element={<Upcoming />}/>
          <Route path='popular' element={<Popular />}/>
          <Route path='now_playing' element={<NowPlaying />}/>
          <Route path='movie/:id' element={<Movie />}/>
          <Route path='search' element={<Search />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)


