import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';

export default function MovieCard({moviePoster, movieTitle, movieReleaseDate, movieLanguage, movieId}) {
    const tmdbImageUrl = 'https://image.tmdb.org/t/p/original/';
    const [favorite, setFavorite] = useState(false)

    const addToFavorite = () => {
      setFavorite(!favorite)
    }
  return (
    <div data-testid="movie-card" className='movie-card'>
        <div className='favorite'>
          <AiFillHeart className={favorite ? `color` : ''} onClick={addToFavorite} />
        </div>
        <img data-testid="movie-poster" src={`${tmdbImageUrl}${moviePoster}`} alt="movie poster" />
        <div className='movie-card-details'>
            <p data-testid="movie-release-date">{movieLanguage}, {movieReleaseDate}</p>
            <Link to={`/movies/${movieId}`}><h2 data-testid="movie-title">{movieTitle}</h2></Link>
        </div>
    </div>
  )
}
