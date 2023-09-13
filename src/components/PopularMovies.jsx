import React from 'react'
import MovieCard from './MovieCard'

export default function PopularMovies({popularMovies}) {
  return (
    <div className='movies'>
        <div className='movies-title'>
            <h1>Popular Movies</h1>
            <p>See More</p>
        </div>
        <div className='movies-list'>
            {popularMovies.slice(0, 10).map(movie => (
                <MovieCard moviePoster={movie.backdrop_path} movieTitle={movie.title} movieReleaseDate={movie.release_date} movieLanguage={movie.original_language} />
            ))}
        </div>
    </div>
  )
}
