// Interface for individual director data
export interface IDirectorData {
  directorName: string;
  imageUrl: string;
  info: string;
}

// Interface for object with multiple director data
export interface IDirectorDataCollection {
  [key: string]: IDirectorData;
}

export interface IDirectorModalProps {
  directorData: IDirectorData;
  showDirectorModal: boolean;
  toggleModal: () => void;
}
