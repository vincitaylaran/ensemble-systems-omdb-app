import React from 'react';
import Result from './Result';
import ImageList from '@mui/material/ImageList';

function Results({ results }) {
  return (
    <ImageList cols={3} gap={32} sx={{ paddingTop: 10 }}>
      {results.map((result) => (
        <Result key={result.imdbID} result={result} />
      ))}
    </ImageList>
  );
}

export default Results;
