import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import TopMovies from './TopMovies';
import PopularMovies from './PopularMovies';
import Footer from './Footer';
import Loader from "../assets/images/loader.svg"

function Homepage() {
  const [isLoading, setIsLoading] = useState(true)
  const [topMovies, setTopMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([])
  const api_key = '4ccaf9505cc3bec7783ded09af8edbe0'; // Replace with your actual API key

  useEffect(() => {
    // Fetch popular movies
    setTimeout(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US`)
            .then((response) => response.json())
            .then((data) => {
                setPopularMovies(data.results)
                setIsLoading(false)
            })
            .catch((error) => console.error('Error fetching popular movies:', error));
    }, 2000)

    // Fetch top-rated movies
      setTimeout(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US`)
            .then((response) => response.json())
            .then((data) => {
                setTopMovies(data.results)
                setIsLoading(false)
            })
            .catch((error) => console.error('Error fetching top-rated movies:', error));
      }, 2000);
  }, []);
  
  return (
    <>
      <Hero />
      {isLoading ? (
        <div className="loader-container">
            <img src={Loader} alt="Loader" className='loader' />
        </div>
      ) : (
      <>
        <TopMovies topMovies={topMovies} /> 
        <PopularMovies popularMovies={popularMovies} />
      </>
      )}
      <Footer />
    </>
  );
}

export default Homepage;
