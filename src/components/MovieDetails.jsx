import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import Extra from "../assets/images/extra.svg"

export default function MovieDetails() {
  const { id } = useParams();
  const api_key = import.meta.env.VITE_API_KEY;
  const [movieDetails, setMovieDetails] = useState({});
  const [directors, setDirectors] = useState([]);
  const [writers, setWriters] = useState([]);
  const [cast, setCast] = useState([]);
  const tmdbImageUrl = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error('Error fetching movie details:', error));

    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`)
      .then((response) => response.json())
      .then((credits) => {
        
        const directorList = credits.crew.filter((member) => member.job === 'Director');
        const writerList = credits.crew.filter((member) => member.department === 'Writing');
        const castList = credits.cast;
        setDirectors(directorList);
        setWriters(writerList);
        setCast(castList);
      })
      .catch((error) => console.error('Error fetching movie credits:', error))
  }, [id]);
  return (
    <div className='movie-details'>
      <h1>Movie #{id}</h1>
      <img src={`${tmdbImageUrl}${movieDetails.backdrop_path}`}alt="movie poster" />
      <div className='movie-details-text'>
        <div className='left'>
          <div className="upper-row">
            <span data-testid="movie-title">{movieDetails.title} &bull;</span>
            <span data-testid="movie-release-date"> {movieDetails.release_date} &bull;</span>
            <span data-testid="movie-runtime"> {movieDetails.runtime} minutes &bull;</span>
            {movieDetails.genres && movieDetails.genres.map((genre, i) => <span className='genre' key={i}> {genre.name}</span>)}
          </div>
          <p data-testid="movie-overview" className='overview'>{movieDetails.overview}</p>
          <ul>
            <li>Directors: 
              {directors.map((director, i) => <span key={i}>{director.name}</span>)}
            </li>
            <li>Writers:
              {writers.map((writer, i) => <span key={i}>{writer.name}</span>)}
            </li>
            <li>Stars:
              {cast.slice(0, 4).map((actor, i) => <span key={i}>{actor.name}</span>)}
            </li>
          </ul>
          <div className='last-child'>Featured Movie - #{id}</div>
        </div>
        <div className='right'>
          <p className='star'><AiOutlineStar className='star-icon' />8.5 <span className='views'>| 350k</span></p>
          <button type='button' className='first'>See Showtimes</button>
          <button type='button' className='second'>More watch options</button>
          <div className='extra'>
            <img src={Extra} alt="extra" />
            <p>Best Movies and Shows this September</p>
          </div>
        </div>
      </div>
    </div>
  );
}

//photo, title, release data, genre, overview, runtime, popularity
