import React from 'react';
import Result from './Result';

function Results({ results, onTodo }) {
  return (
    <div className='resultsArea'>
      {results.map((result) => (
        <Result key={result.imdbID} result={result} onTodo={onTodo} />
      ))}
    </div>
  );
}

export default Results;
