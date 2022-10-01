import { useState } from 'react';
import './App.css';
import { isStringEmptyOrNull } from './helper';
import settings from './settings';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const fetchMovies = async (searchTerm) => {
    if (!isStringEmptyOrNull(searchTerm)) {
      const endpoint = `http://www.omdbapi.com/?apikey=${settings.apiKey}&s=${searchTerm}`;
      const request = await fetch(endpoint);
      const response = await request.json();

      const { Response, Search, totalResults } = response;

      if (Number(totalResults) > 0 && Response.toLowerCase() === 'true') {
        // Gives each result a "TODO" indicator so that you can label each button with "TODO"
        const searchResultsWithTodo = Search.map((result) => ({
          ...result,
          isTodo: false,
        }));

        setSearchResults(searchResultsWithTodo);
      }

      return;
    }

    setSearchResults([]);
  };

  const handleTodo = (movie) => {
    const newResults = searchResults.map((result) => {
      if (result.imdbID === movie.imdbID) {
        return { ...result, isTodo: true };
      }

      return result;
    });

    setSearchResults(newResults);
  };

  return (
    <div className='App'>
      <input
        className='searchField'
        type='text'
        name='search'
        placeholder='Type the movie title here...'
        onChange={(event) => fetchMovies(event.target.value)}
      />
      <div className='resultsArea'>
        {searchResults.map((movie) => (
          <div className='result' key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>Title: {movie.Title}</h2>
            <h3>Released in: {movie.Year}</h3>
            <button onClick={() => handleTodo(movie)}>
              {movie.isTodo ? 'TODO' : 'Button'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
