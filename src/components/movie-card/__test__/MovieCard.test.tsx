/**
 * @jest-environment jsdom
 */

import React from 'react';
import MovieCard from '../MovieCard';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { IMovieCard } from '../../../interfaces/movie-list';

const movieCardTestData: IMovieCard = {
  id: 'tt0068646',
  title: 'The Godfather',
  genre: 'Crime/Mafia',
  director: 'Francis Ford Coppola',
  poster:
    'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  plot: `An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.`,
  directorData: {
    directorName: 'Francis Ford Coppola',
    imageUrl:
      'https://media.gettyimages.com/photos/episode-307-pictured-director-francis-ford-copolla-picture-id459781545?s=2048x2048',
    info: 'Francis Ford Coppola is an American film director, producer and screenwriter. He was a central figure in the New Hollywood filmmaking movement of the 1960s and 1970s, and is widely considered to be one of the greatest filmmakers of all time.',
  },
};

const { id, title, genre, director, poster, plot, directorData } = movieCardTestData;

test('Should render the MovieCard', () => {
  const { getByTestId } = render(
    <MovieCard
      id={id}
      title={title}
      genre={genre}
      director={director}
      poster={poster}
      plot={plot}
      directorData={directorData}
    />
  );
  // const movieCardComponent = render(<MovieCard/>);
  const movieTitle = getByTestId('card-detail-container__title');
  const movieGenre = getByTestId('card-detail-container__genre');
  const movieDirector = getByTestId('card-detail-container__director');

  expect(movieTitle.textContent).toBe(movieCardTestData.title);
  expect(movieGenre.textContent).toBe(movieCardTestData.genre);
  expect(movieDirector.textContent).toBe(movieCardTestData.director);
});
