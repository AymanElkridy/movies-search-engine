import React, { useEffect, useState } from 'react'
import { OMDBSearchResult, Movie } from './types'
import MovieCard from './MovieCard'
import './App.css'

const App = () => {
  const API_URL = 'https://www.omdbapi.com/?type=movie&apikey=9e70a85d&s='

  const [searchInput, setSearchInput] = useState<string>()
  const [current, setCurrent] = useState<string>()
  const [movies, setMovies] = useState<Movie[]>()
  const [total, setTotal] = useState<number>(0)
  const [page, setPage] = useState<number>(0)
  const [nos, setNos] = useState<number>(0)

  const loadMovies = async (query: string | undefined, page: number) => {
    if (typeof(query) == 'string') {
      try {
        const response = await fetch(`${API_URL}${query}&page=${page}`)
        const json: OMDBSearchResult = await response.json()
        setMovies(json.Search)
        setTotal(json.totalResults ? Math.ceil(Number(json.totalResults) / 10) : 0)
      } catch (err) {
        throw new Error('No movies found.')
      }
    }
  }

  const reset = () => {
    setSearchInput('')
    setCurrent('')
    setMovies(undefined)
    setTotal(0)
    setPage(0)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value as string)
  }

  const handleSubmit = async () => {
    await loadMovies(searchInput, 1)
    setCurrent(searchInput)
    setNos((prevNos) => prevNos + 1)
  }

  const handleNext = () => {
    if (page < total) {
      loadMovies(current, page + 1)
      setPage((prevPage) => prevPage + 1)
    }
  }

  const handlePrev = () => {
    if (page > 1) {
      loadMovies(current, page - 1)
      setPage((prevPage) => prevPage - 1)
    }
  }

  useEffect(() => {
    movies?.length ? setPage(1) : setPage(0)
  }, [nos])

  useEffect(() => {
    if (page < total) {
      document.getElementById('next-svg')?.classList.remove('dimmed')
    } else {
      document.getElementById('next-svg')?.classList.add('dimmed')
    }
    if (page > 1) {
      document.getElementById('prev-svg')?.classList.remove('dimmed')
    } else {
      document.getElementById('prev-svg')?.classList.add('dimmed')
    }
  }, [page, total])
  
  return (
    <div className = 'App'>
      <h1 onClick={reset} className = 'App-header'>
        <img className='logo' src='./img/movies-logo.png' alt='logo'/>
        Movies!
      </h1>
      
      <form onSubmit = {(e) => {
        e.preventDefault()
        handleSubmit()
      }}>
        <div className="search-form-container">
          <div className="search-bar-container">
            <input
              className='search-bar'
              type = 'text'
              placeholder = 'Search for movies ...'
              value = {searchInput}
              onChange = {(e) => {handleChange(e)}}
            />
          </div>
          <div className='search-icon-container' onClick={handleSubmit}>
            <img className='search-icon' src='img/search.svg' alt='search icon'/>
          </div>
        </div>
      </form>

      <div className='surf-pages'>
        <div
          onClick = {handlePrev}
          id='prev-svg'
          className="toggle-img-container prev-container dimmed">
          <img
            className = 'toggle-img prev'
            src='img/previous.svg'
            alt='previous'
          />
        </div>

        <span> page {page} of {total} </span>

        <div
          onClick = {handleNext}
          id='next-svg'
          className="toggle-img-container next-container dimmed">
          <img
            className = 'toggle-page next'
            src='img/next.svg'
            alt='next'
          />
        </div>
      </div>

      <div className="container">
        <div className = 'movie-cards-container'>
          {!movies ? (<p>There are no movies</p>) : (movies as Movie[]).map((movie) => {
            return (<MovieCard {...movie}/>)
          })}
        </div>
      </div>
    </div>
  )
}

export default App;
