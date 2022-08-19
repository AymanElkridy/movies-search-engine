import { Movie } from './types'

const MovieCard = (movie: Movie) => {
    return (
        <div className = 'movie-card'>
          <a target='_blank' href={`https://www.imdb.com/title/${movie.imdbID}`}>
            <div className="poster-container">
              <img
                className = 'movie-poster'
                src = {
                  movie.Poster !== 'N/A' ?
                  movie.Poster :
                  'https://via.placeholder.com/300'
                }
                alt = {movie.Title}
              />
            </div>
            <div className="title-container">
              <label className='movie-title'>{movie.Title} ({movie.Year})</label>
            </div>
          </a>
        </div>
    )
  }

  export default MovieCard