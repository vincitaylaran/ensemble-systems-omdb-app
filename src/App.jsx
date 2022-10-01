import { useState } from 'react';
import './styles/App.css';
import { isStringEmptyOrNull } from './helpers';
import settings from './settings';
import Results from './components/Results';
import AutoSearch from './components/AutoSearch';
import { toResult } from './mapper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  const [result, setResult] = useState({
    success: true,
    items: [],
    errorMessage: '',
  });

  const fetchMovies = async (searchTerm) => {
    if (!isStringEmptyOrNull(searchTerm)) {
      const endpoint = `http://www.omdbapi.com/?apikey=${settings.apiKey}&s=${searchTerm}`;
      const request = await fetch(endpoint);
      const response = await request.json();

      setResult(toResult(response));

      return;
    }

    setResult({ ...result, items: [] });
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
