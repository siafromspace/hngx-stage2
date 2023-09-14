import React from 'react'
import MovieCard from './MovieCard'

export default function SearchResults({searchResults, query}) {
  return (
    <div className='movies'>
        <div className='movies-title'>
            <h1>Search Results for {query}</h1>
            <p>See More</p>
        </div>
        <div className='movies-list'>
            {searchResults.slice(0, 10).map(movie => (
                <MovieCard moviePoster={movie.backdrop_path} movieTitle={movie.title} movieReleaseDate={movie.release_date} movieLanguage={movie.original_language} movieId={movie.id} />
            ))}
        </div>
    </div>
  )
}
