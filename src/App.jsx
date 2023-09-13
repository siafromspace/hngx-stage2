import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import TopMovies from './components/TopMovies';
import PopularMovies from './components/PopularMovies';
import Footer from './components/Footer';

function App() {
  const [topMovies, setTopMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([])
  const api_key = '4ccaf9505cc3bec7783ded09af8edbe0'; // Replace with your actual API key

  useEffect(() => {
    // Fetch popular movies
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US`)
      .then((response) => response.json())
      .then((data) => setPopularMovies(data.results))
      .catch((error) => console.error('Error fetching popular movies:', error));

    // Fetch top-rated movies
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US`)
      .then((response) => response.json())
      .then((data) => setTopMovies(data.results))
      .catch((error) => console.error('Error fetching top-rated movies:', error));
  }, []);
  
  return (
    <>
      <Hero />
      <TopMovies topMovies={topMovies} />
      <PopularMovies popularMovies={popularMovies} />
      <Footer />
    </>
  );
}

export default App;
