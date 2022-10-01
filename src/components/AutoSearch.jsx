import React from 'react';

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
