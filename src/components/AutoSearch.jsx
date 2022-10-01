import React from 'react';
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
      sx={{ background: 'white', borderRadius: 1 }}
    />
  );
}

export default AutoSearch;
