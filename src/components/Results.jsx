import React from 'react';
import Result from './Result';
import ImageList from '@mui/material/ImageList';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Results({ results }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <ImageList
      cols={matches ? 1 : 3}
      gap={32}
      sx={{
        padding: 10,
      }}
    >
      {results.map((result) => (
        <Result key={result.imdbID} result={result} />
      ))}
    </ImageList>
  );
}

export default Results;
