import React from 'react';

function Result({ result }) {
  return (
    <div className='result'>
      <img src={result.Poster} alt={result.Title} />
      <h2>Title: {result.Title}</h2>
      <h3>Released in: {result.Year}</h3>
      <button>TODO</button>
    </div>
  );
}

export default Result;
