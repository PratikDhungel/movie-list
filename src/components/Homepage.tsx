import { useEffect, useState } from 'react';

import MovieCard from './MovieCard';
import { handleGetMethod } from '../http/http-services';
import { IMovieList, IMovieListStates, IMovieListApi } from '../interfaces/movie-list';

const movieIds = ['tt0816692', 'tt2380307', 'tt1447500'];

const movieListStateDefaultValues: IMovieListStates = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const App = () => {
  const [movieList, setMovieList] = useState<IMovieList[]>([]);
  const [movieListStates, setMovieListStates] = useState<IMovieListStates>(movieListStateDefaultValues);
  const { isLoading, isSuccess, isError } = movieListStates;

  const movieListApiData: IMovieListApi[] = [];

  const fetchMovieList = async () => {
    try {
      setMovieListStates({ ...movieListStates, isLoading: true });
      const movieListLength = movieIds.length;
      for (let i = 0; i < movieListLength; i++) {
        const movieId = movieIds[i];
        const apiUrl = `http://www.omdbapi.com/?i=${movieId}&apikey=9e7e2477`;
        const response = await handleGetMethod(apiUrl, {});
        movieListApiData.push(response.data);
      }

      const tempData: IMovieList[] = movieListApiData.map((movie) => {
        const { Title, Genre, Director, Plot, Poster, imdbID } = movie;
        const singleGenre = Genre.split(',')[0];
        const singleDirector = Director.split(',')[0];
        return { id: imdbID, title: Title, genre: singleGenre, director: singleDirector, plot: Plot, poster: Poster };
      });
      setMovieList(tempData);
      setMovieListStates({ ...movieListStates, isLoading: false, isSuccess: true });
    } catch (err) {
      setMovieListStates({ ...movieListStates, isLoading: false, isSuccess: false, isError: true });
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovieList();
  }, []);

  return (
    <div className="movie-list-container">
      {movieList.map((movie, index) => {
        const { id, title, genre, director, poster, plot } = movie;
        return <MovieCard id={id} title={title} genre={genre} director={director} poster={poster} plot={plot} key={index} />;
      })}
    </div>
  );
};

export default App;
