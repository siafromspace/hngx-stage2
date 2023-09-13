import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MovieDetails() {
  const { id } = useParams();
  const api_key = '4ccaf9505cc3bec7783ded09af8edbe0'
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
        console.log(cast)
      })
      .catch((error) => console.error('Error fetching movie credits:', error))
  }, [id]);
  return (
    <div className='movie-details'>
      <img src={`${tmdbImageUrl}${movieDetails.backdrop_path}`}alt="movie poster" />
      <div>
        <div className='left'>
          <div>
            <span>{movieDetails.title}</span>
            <span>{movieDetails.release_date}</span>
            <span>{movieDetails.runtime}</span>
            {movieDetails.genres && movieDetails.genres.map((genre) => <span>{genre.name}</span>)}
          </div>
          <p>{movieDetails.overview}</p>
          <ul>
            <li>Directors:
              {directors.map((director) => <span>{director.name}</span>)}
            </li>
            <li>Writers:
              {writers.map((writer) => <span>{writer.name}</span>)}
            </li>
            <li>Stars:
              {cast.slice(0, 4).map((actor) => <span>{actor.name}</span>)}
            </li>
          </ul>
          <div>Featured Movie - #{id}</div>
        </div>
        <div>
          <p>8.5 | 350k</p>
          <button>See Showtimes</button>
          <button>More watch options</button>
          <div>
            <img src="" alt="" />
            <p>Best Movies and Shows in September</p>
          </div>
        </div>
      </div>
    </div>
  );
}

//photo, title, release data, genre, overview, runtime, popularity
