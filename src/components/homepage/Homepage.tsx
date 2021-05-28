import { useEffect, useState } from 'react';

import './homepage-styles.css';
import Loader from '../loader/Loader';
import MovieCard from '../movie-card/MovieCard';
import { errorToast, successToast } from '../../utils';
import getDirectorData from '../../mock-api/get-director-data';
import { IDirectorData } from '../../interfaces/director-data';
import { fetchMovieData } from '../../services/movie-list-services';
import { IMovieCard, IMovieListStates, IMovieApiDirectorDataCombined } from '../../interfaces/movie-list';

const movieIds = ['tt0816692', 'tt2380307', 'tt1447500'];
// 'tt0068646' -> ID for movie The Godfather (for tests)

const movieListStateDefaultValues: IMovieListStates = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const Homepage = () => {
  const [movieList, setMovieList] = useState<IMovieCard[]>([]);
  const [movieListStates, setMovieListStates] = useState<IMovieListStates>(movieListStateDefaultValues);
  const { isLoading, isSuccess, isError } = movieListStates;

  const movieListApiData: IMovieApiDirectorDataCombined[] = [];

  // fetchMovieList will fetch data for each movie from the API
  // API response has some extra data fields so it will be filtered out and will set movieList

  // Director Data will also be fetched from a mock API which will always return data successfully
  // Both these data will be combined

  const fetchMovieList = async () => {
    try {
      setMovieListStates({ ...movieListStates, isLoading: true });
      const movieListLength = movieIds.length;
      for (let i = 0; i < movieListLength; i++) {
        const movieId = movieIds[i];
        const movieDataResponse = await fetchMovieData(movieId);
        const directorDataResponse = await getDirectorData(movieId);

        const movieData = movieDataResponse.data;
        let directorData: IDirectorData;

        // If director data is returned from the mock API then add it to the combined data
        // Else pass default data

        if (directorDataResponse?.data) {
          directorData = directorDataResponse.data;
        } else {
          directorData = {
            directorName: 'Director Name N/A',
            imageUrl: 'https://media.gettyimages.com/vectors/people-icon-with-speech-bubble-vector-id528194567?s=2048x2048',
            info: 'Director Info N/A',
          };
        }

        const combinedData = { ...movieData, directorData };

        movieListApiData.push(combinedData);
      }

      const tempData: IMovieCard[] = movieListApiData.map((movie) => {
        const { Title, Genre, Director, Plot, Poster, imdbID, directorData } = movie;
        const singleGenre = Genre.split(',')[0];
        const singleDirector = Director.split(',')[0];
        return {
          id: imdbID,
          title: Title,
          genre: singleGenre,
          director: singleDirector,
          plot: Plot,
          poster: Poster,
          directorData: directorData,
        };
      });
      successToast('Successfully fetched movie list');
      setMovieList(tempData);
      setMovieListStates({ ...movieListStates, isLoading: false, isSuccess: true });
    } catch (err) {
      setMovieListStates({ ...movieListStates, isLoading: false, isSuccess: false, isError: true });
      errorToast('Error while fetching movie list');
    }
  };

  // API call will be made only when the component is mounted
  useEffect(() => {
    fetchMovieList();
  }, []);

  return (
    <div>
      {isError ? (
        <div className="movie-list-container__error">
          <p>Oops! Something went wrong</p>
          <p>Please try reloading the page</p>
        </div>
      ) : (
        <div className="movie-list-container">
          {isLoading ? (
            <Loader containerHeight="522" />
          ) : (
            movieList.map((movie, index) => {
              const { id, title, genre, director, poster, plot, directorData } = movie;
              return (
                <MovieCard
                  id={id}
                  title={title}
                  genre={genre}
                  director={director}
                  poster={poster}
                  plot={plot}
                  directorData={directorData}
                  key={index}
                />
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default Homepage;
