// Standardizes the OMDB response object
export const toResult = (omdbResponse) => {
  const success = omdbResponse.Response?.toLowerCase() === 'true';

  return {
    success,
    items: omdbResponse.Search ?? [],
    errorMessage: !success && omdbResponse.Error,
  };
};
