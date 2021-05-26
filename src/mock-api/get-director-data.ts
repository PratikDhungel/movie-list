import { IDirectorDataCollection } from '../interfaces/director-data';

// Static data object with individual director data
// Director data is mapped to the movie id

const directorData: IDirectorDataCollection = {
  tt0816692: {
    directorName: 'Christopher Nolan',
    imageUrl:
      'https://media.gettyimages.com/photos/director-christopher-nolan-attends-a-bafta-life-in-pictures-photocall-picture-id883732954?k=6&m=883732954&s=612x612&w=0&h=jbfbymAfAbOZlSykuhGBsk1LfwTsmFZ1Z37wpX9Hldw=',
    info: 'Christopher Edward Nolan is a British-American film director, producer, and screenwriter. His directorial efforts have grossed more than US$5 billion worldwide, garnered 36 Oscar nominations and 11 wins. Born and raised in London, Nolan developed an interest in filmmaking from a young age.',
  },
  tt2380307: {
    directorName: 'Lee Unkrich',
    imageUrl:
      'https://media.gettyimages.com/photos/director-lee-unkrich-attends-the-toy-story-3-panel-at-the-2010-day-2-picture-id98238009?k=6&m=98238009&s=612x612&w=0&h=O0IaAhiwe1SBsPqS6Lpj_6h5sk_AhFbOgtAFSqwjhfQ=',
    info: 'Lee Edward Unkrich is an American director, film editor, screenwriter, and animator. He was a longtime member of the creative team at Pixar, where he started in 1994 as a film editor. He later began directing, first as co-director of Toy Story 2. After co-directing Toy Story 2, Monsters, Inc.',
  },
  tt1447500: {
    directorName: 'S.S. Rajamouli',
    imageUrl:
      'https://media.gettyimages.com/photos/indian-actresses-tamannaah-bhatia-and-anushka-shetty-attend-the-of-picture-id475588292?s=612x612',
    info: 'Koduri Srisaila Sri Rajamouli, professionally known as S. S. Rajamouli, is an Indian film director and screenwriter who primarily works in Telugu cinema.',
  },
};

const getDirectorData = (movieId: string) => {
  // Use movieId as the type which corresponds to the key of the Interface for list of director data object
  const data = directorData[movieId as keyof IDirectorDataCollection];
  return Promise.resolve({ data: data });
};

export default getDirectorData;
