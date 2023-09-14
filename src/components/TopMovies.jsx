import React from 'react'
import MovieCard from './MovieCard'

export default function TopMovies({topMovies}) {
  return (
    <div className='movies'>
        <div className='movies-title'>
            <h1>Top Movies</h1>
            <p>See More</p>
        </div>
        <div className='movies-list'>
            {topMovies.slice(0, 10).map((movie, i) => (
                <MovieCard key={i} moviePoster={movie.backdrop_path} movieTitle={movie.title} movieReleaseDate={movie.release_date} movieLanguage={movie.original_language} movieId={movie.id} />
            ))}
        </div>
    </div>
  ) 
}
