import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { movieCardTestData } from '../../../test-mock-data/movie-card';
import DirectorModal from '../DirectorModal';

const { directorData } = movieCardTestData;
const { directorName, imageUrl, info } = directorData;

const mockToggleFunction = () => {
  return null;
};

test('Should render the Director Modal', () => {
  const { getByTestId } = render(
    <DirectorModal directorData={directorData} showDirectorModal={true} toggleModal={mockToggleFunction} />
  );

  const directorTitleName = getByTestId('director-modal__director-name');
  const directorDetails = getByTestId('director-modal__director-text');
  const directorImage = getByTestId('director-modal__director-image') as HTMLImageElement;

  expect(directorTitleName.textContent).toBe(directorName);
  expect(directorDetails.textContent).toBe(info);
  expect(directorImage.src).toBe(imageUrl);
});

test('Should close the Director Modal', async () => {
  const mockToggleModalFunc = jest.fn();

  const { queryByTestId, getByTestId } = render(
    <DirectorModal directorData={directorData} showDirectorModal={true} toggleModal={mockToggleModalFunc} />
  );

  const directorDetails = queryByTestId('director-modal__director-text');
  const closeDirectorModalButton = getByTestId('director-modal__close-button');

  expect(directorDetails).toBeTruthy();

  fireEvent.click(closeDirectorModalButton);

  expect(mockToggleModalFunc).toHaveBeenCalled();
});
