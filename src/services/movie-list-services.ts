import { endpoints } from '../constants/endpoints';
import { handleGetMethod } from '../http/http-services';

// Service to fetch movie data for individual movie
export const fetchMovieData = async (movieId: string) => {
  const queryParameter = `?i=${movieId}&apikey=9e7e2477`;
  const requestURL = `${endpoints.fetchMovieDetailEndpoint}${queryParameter}`;
  const apiResponse = await handleGetMethod(requestURL, {});
  return apiResponse;
};
