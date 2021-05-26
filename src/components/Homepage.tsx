import { useEffect, useState } from 'react';

import MovieCard from './MovieCard';
import Loader from './Loader';
import { fetchMovieData } from '../services/movie-list-services';
import { IMovieList, IMovieListStates, IMovieListApi } from '../interfaces/movie-list';
import { errorToast, successToast } from '../utils';

const movieIds = ['tt0816692', 'tt2380307', 'tt1447500'];

const movieListStateDefaultValues: IMovieListStates = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const Homepage = () => {
  const [movieList, setMovieList] = useState<IMovieList[]>([]);
  const [movieListStates, setMovieListStates] = useState<IMovieListStates>(movieListStateDefaultValues);
  const { isLoading, isSuccess, isError } = movieListStates;

  const movieListApiData: IMovieListApi[] = [];

  // fetchMovieList will fetch data for each movie from the API
  // API response has some extra data fields so it will be filtered out and will set movieList

  const fetchMovieList = async () => {
    try {
      setMovieListStates({ ...movieListStates, isLoading: true });
      const movieListLength = movieIds.length;
      for (let i = 0; i < movieListLength; i++) {
        const movieId = movieIds[i];
        const response = await fetchMovieData(movieId);
        movieListApiData.push(response.data);
      }

      const tempData: IMovieList[] = movieListApiData.map((movie) => {
        const { Title, Genre, Director, Plot, Poster, imdbID } = movie;
        const singleGenre = Genre.split(',')[0];
        const singleDirector = Director.split(',')[0];
        return { id: imdbID, title: Title, genre: singleGenre, director: singleDirector, plot: Plot, poster: Poster };
      });
      successToast('Successfully fetched movie list');
      setMovieList(tempData);
      setMovieListStates({ ...movieListStates, isLoading: false, isSuccess: true });
    } catch (err) {
      setMovieListStates({ ...movieListStates, isLoading: false, isSuccess: false, isError: true });
      errorToast('Error while fetching movie list');
      console.log(err);
    }
  };

  // API call will be made only when the component is mounted
  useEffect(() => {
    fetchMovieList();
  }, []);

  return (
    <div className="movie-list-container">
      {isLoading ? (
        <Loader />
      ) : (
        movieList.map((movie, index) => {
          const { id, title, genre, director, poster, plot } = movie;
          return (
            <MovieCard id={id} title={title} genre={genre} director={director} poster={poster} plot={plot} key={index} />
          );
        })
      )}
    </div>
  );
};

export default Homepage;
