export interface IDirectorData {
  directorName: string;
  imageUrl: string;
  info: string;
}

export interface IDirectorDataCollection {
  [key: string]: IDirectorData;
}
