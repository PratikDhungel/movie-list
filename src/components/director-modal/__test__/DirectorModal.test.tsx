import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { movieCardTestData } from '../../../test-mock-data/movie-card';
import DirectorModal from '../DirectorModal';

const { directorData } = movieCardTestData;

const mockToggleFunction = () => {
  return null;
};

test('Should render the Director Modal', () => {
  const { getByTestId } = render(
    <DirectorModal directorData={directorData} showDirectorModal={true} toggleModal={mockToggleFunction} />
  );

  const directorDetails = getByTestId('director-modal__director-text');

  expect(directorDetails.textContent).toBe(directorData.info);
});
