/**
 * @jest-environment jsdom
 */

import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MovieCard from '../MovieCard';
import DirectorModal from '../../director-modal/DirectorModal';
import { movieCardTestData } from '../../../test-mock-data/movie-card';
import { ListGroupItem } from 'react-bootstrap';

const { title, genre, director, poster, plot, directorData } = movieCardTestData;

test('Should render the MovieCard', () => {
  const { getByTestId } = render(<MovieCard {...movieCardTestData} />);

  const movieTitle = getByTestId('card-detail-container__title');
  const movieGenre = getByTestId('card-detail-container__genre');
  const movieDirector = getByTestId('card-detail-container__director');
  const moviePoster = getByTestId('movie-card__poster-image') as HTMLImageElement;

  expect(moviePoster.src).toBe(poster);
  expect(movieTitle.textContent).toBe(title);
  expect(movieGenre.textContent).toBe(genre);
  expect(movieDirector.textContent).toBe(director);
});

test('Should render the dropdown container in the Movie Card', () => {
  const { getByTestId } = render(<MovieCard {...movieCardTestData} />);

  const cardDropdownMoviePlot = getByTestId('card-dropdown-plot');
  const cardDropdownAddToFavorite = getByTestId('card-dropdown-add-favorite-button');

  expect(cardDropdownMoviePlot.textContent).toBe(plot);
  expect(cardDropdownAddToFavorite.textContent).toBe('Add to Favorite');
});

const dummyFunction = () => null;

test('Should display the Director Modal when Director Name is clicked', async () => {
  const movieCardComponent = render(<MovieCard {...movieCardTestData} />);
  const movieDirector = movieCardComponent.getByTestId('card-detail-container__director');

  const directorModalComponent = render(
    <DirectorModal directorData={directorData} showDirectorModal={false} toggleModal={dummyFunction} />
  );

  let directorDetails = directorModalComponent.queryByTestId('director-modal__director-text');
  expect(directorDetails).toBeNull();

  fireEvent.click(movieDirector);

  await waitFor(() => {
    directorDetails = directorModalComponent.queryByTestId('director-modal__director-text');
    expect(directorDetails).toBeInTheDocument();
    expect(directorDetails?.textContent).toBe(directorData.info);
  });
});
