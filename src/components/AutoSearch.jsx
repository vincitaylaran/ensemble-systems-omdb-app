import React from 'react';
import '../styles/AutoSearch.css';
import TextField from '@mui/material/TextField';

function AutoSearch({ onSearch, error, errorMessage }) {
  return (
    <TextField
      autoFocus
      error={error}
      helperText={errorMessage}
      type='text'
      name='search'
      placeholder='Search movie...'
      onChange={(event) => onSearch(event.target.value)}
    />
  );
}

export default AutoSearch;
