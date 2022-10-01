import { useState } from 'react';
import './App.css';

const apiKey = 'c8692e90';

// TODO move inline styles to a CSS file
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const isStringEmptyOrNull = (value) => (!value || value.length === 0);

  const fetchMovies = async (event) => {
    event.preventDefault();

    if (!isStringEmptyOrNull(searchTerm)) {
      const endpoint = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;
      const request = await fetch(endpoint);
      const response = await request.json();
      
      const { Response, Search , totalResults } = response;
      
      if (Number(totalResults) > 0 && Response.toLowerCase() !== 'false') {
        setSearchResults(Search);
      }
    }
  };

  return (
    <div className="App">
      <form style={{ paddingTop: 16 }} onSubmit={fetchMovies}>
        <input type='text' name='search' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
        <input style={{ marginLeft: 8 }} type='submit' value='Search' />
      </form>
      <div>
        {searchResults.map(movie => (
          <div key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2>
            <h3>{movie.Year}</h3>
            <button>{movie.Title}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
