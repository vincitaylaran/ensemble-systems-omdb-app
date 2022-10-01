import React from 'react';
import Result from './Result';
import '../styles/Results.css';

function Results({ results }) {
  return (
    <div className='resultsArea'>
      {results.map((result) => (
        <Result key={result.imdbID} result={result} />
      ))}
    </div>
  );
}

export default Results;
