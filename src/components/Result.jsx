import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from '@mui/material/Button';

function Result({ result }) {
  return (
    <ImageListItem>
      <img src={result.Poster} alt={result.Title} />
      <ImageListItemBar
        title={result.Title}
        subtitle={`Released in: ${result.Year}`}
        position='below'
        actionIcon={
          <Button
            sx={{ marginTop: '6px', marginLeft: '6px' }}
            variant='contained'
            size='small'
          >
            TODO
          </Button>
        }
      />
    </ImageListItem>
  );
}

export default Result;
