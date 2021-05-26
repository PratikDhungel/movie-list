import { IAddToFavoriteResponse } from '../interfaces/add-to-favorite';

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
