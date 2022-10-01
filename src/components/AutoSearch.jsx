import React from 'react';
import '../styles/AutoSearch.css';

function AutoSearch({ onSearch }) {
  return (
    <input
      className='searchField'
      type='text'
      name='search'
      placeholder='Search movie...'
      onChange={(event) => onSearch(event.target.value)}
    />
  );
}

export default AutoSearch;
