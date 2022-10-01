import { useState } from 'react';
import './styles/App.css';
import { isStringEmptyOrNull } from './helper';
import settings from './settings';
import Results from './components/Results';
import AutoSearch from './components/AutoSearch';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const fetchMovies = async (searchTerm) => {
    if (!isStringEmptyOrNull(searchTerm)) {
      const endpoint = `http://www.omdbapi.com/?apikey=${settings.apiKey}&s=${searchTerm}`;
      const request = await fetch(endpoint);
      const response = await request.json();

      const { Response, Search, totalResults } = response;

      if (Number(totalResults) > 0 && Response.toLowerCase() === 'true') {
        setSearchResults(Search);
      }

      return;
    }

    setSearchResults([]);
  };

  return (
    <div className='App'>
      <AutoSearch onSearch={fetchMovies} />
      <Results results={searchResults} />
    </div>
  );
}

export default App;
