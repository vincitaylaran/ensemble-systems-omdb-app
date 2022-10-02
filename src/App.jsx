import { useState } from 'react';
import './styles/App.css';
import { isStringEmptyOrNull } from './helpers';
import settings from './settings';
import { toResult } from './mapper';
import Results from './components/Results';
import AutoSearch from './components/AutoSearch';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const initialResult = {
  success: true,
  items: [],
  errorMessage: '',
};

function App() {
  const [result, setResult] = useState(initialResult);

  const fetchMovies = async (searchTerm) => {
    if (!isStringEmptyOrNull(searchTerm)) {
      const endpoint = `http://www.omdbapi.com/?apikey=${settings.apiKey}&s=${searchTerm}`;
      const request = await fetch(endpoint);
      const response = await request.json();

      // Convert the response object into a more standardized object
      setResult(toResult(response));

      return;
    }

    setResult(initialResult);
  };

  return (
    <div className='App'>
      <AppBar>
        <Toolbar sx={{ justifyContent: 'space-between', padding: 1 }}>
          <Typography variant='h3'>OMDB</Typography>
          <AutoSearch
            onSearch={fetchMovies}
            error={!result.success}
            errorMessage={result.errorMessage}
          />
        </Toolbar>
      </AppBar>
      <Results results={result.items} />
    </div>
  );
}

export default App;
