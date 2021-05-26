import { IAddToFavoriteResponse } from '../interfaces/add-to-favorite';

// addToFavorite will either resolve or reject the Promise based on the random number generated
// Will respond after 1 second timeout

export const addToFavorite = (): Promise<IAddToFavoriteResponse> => {
  return new Promise((resolve, reject) => {
    const randomNumber: number = Math.floor(Math.random() * 2);
    setTimeout(() => {
      if (randomNumber === 1) {
        resolve({
          success: true,
          message: 'Added to Favorite',
        });
      }
      reject(new Error('Error while adding to favorites'));
    }, 1000);
  });
};
