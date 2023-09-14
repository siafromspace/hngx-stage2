import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import TopMovies from './TopMovies';
import PopularMovies from './PopularMovies';
import Footer from './Footer';
import Loader from "../assets/images/loader.svg"
import SearchResults from './SearchResults';

const Homepage = () => {
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [topMovies, setTopMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([])
  const [searchResults, setSearchResults] = useState(null)
  const api_key = import.meta.env.VITE_API_KEY;

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
      }, 2000)

  }, []);
  const searchMovies = () => {
    setTimeout(() => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}`)
            .then((response) => response.json())
            .then((data) => {
                setSearchResults(data.results)
                setIsLoading(false)
            })
            .catch((error) => console.error('Error fetching search results:', error));
    }, 1000)
  }
  return (
    <>
      <Hero query={query} setQuery={setQuery} searchMovies={searchMovies} />
      {isLoading ? (
        <div className="loader-container">
            <img src={Loader} alt="Loader" className='loader' />
        </div>
      ) : (
      <>
        {searchResults !== null && <SearchResults searchResults = {searchResults} query={query} />}
        <TopMovies topMovies={topMovies} /> 
        <PopularMovies popularMovies={popularMovies} />
      </>
      )}
      <Footer />
    </>
  );
}

export default Homepage;
