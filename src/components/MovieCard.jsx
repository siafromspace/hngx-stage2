import React from 'react'
import { Link } from 'react-router-dom';

export default function MovieCard({moviePoster, movieTitle, movieReleaseDate, movieLanguage, movieId}) {
    const tmdbImageUrl = 'https://image.tmdb.org/t/p/original/';
  return (
    <Link to={`/movie/${movieId}`} className='movie-card'>
        <img src={`${tmdbImageUrl}${moviePoster}`} alt="movie poster" />
        <div className='movie-card-details'>
            <p>{movieLanguage}, {movieReleaseDate}</p>
            <h2>{movieTitle}</h2>
        </div>
    </Link>
  )
}
