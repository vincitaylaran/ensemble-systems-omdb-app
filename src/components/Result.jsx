import React from 'react';

function Result({ result, onTodo }) {
  return (
    <div className='result'>
      <img src={result.Poster} alt={result.Title} />
      <h2>Title: {result.Title}</h2>
      <h3>Released in: {result.Year}</h3>
      <button onClick={() => onTodo(result)}>
        {result.isTodo ? 'TODO' : 'Button'}
      </button>
    </div>
  );
}

export default Result;
