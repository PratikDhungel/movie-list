/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MovieCard from '../MovieCard';
import { movieCardTestData } from '../../../test-mock-data/movie-card';

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
  const movieTitle = getByTestId('card-detail-container__title');
  const movieGenre = getByTestId('card-detail-container__genre');
  const movieDirector = getByTestId('card-detail-container__director');

  expect(movieTitle.textContent).toBe(movieCardTestData.title);
  expect(movieGenre.textContent).toBe(movieCardTestData.genre);
  expect(movieDirector.textContent).toBe(movieCardTestData.director);
});
