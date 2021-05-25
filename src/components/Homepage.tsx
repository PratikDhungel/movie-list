const movieIds = ['tt0816692', 'tt2380307', 'tt1447500'];

import { useEffect, useState } from 'react';
import { IMovieList, IMovieListStates, IMovieListApi } from '../interfaces/movie-list';
import { handleGetMethod } from '../http/http-services';

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
        const { Title, Genre, Director, Plot, Poster } = movie;
        return { title: Title, genre: Genre, director: Director, plot: Plot, poster: Poster };
      });
      console.log(tempData);
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
    <div>
      <h1>This is the Homepage Component..</h1>
    </div>
  );
};

export default App;
