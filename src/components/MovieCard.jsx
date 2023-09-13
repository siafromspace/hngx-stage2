import React from 'react'

export default function MovieCard({moviePoster, movieTitle, movieReleaseDate, movieLanguage}) {
    const tmdbImageUrl = 'https://image.tmdb.org/t/p/original/';
  return (
    <div className='movie-card'>
        <img src={`${tmdbImageUrl}${moviePoster}`} alt="movie poster" />
        <div className='movie-card-details'>
            <p>{movieLanguage}, {movieReleaseDate}</p>
            <h2>{movieTitle}</h2>
        </div>
    </div>
  )
}
