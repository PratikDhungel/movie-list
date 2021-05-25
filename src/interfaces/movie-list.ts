export interface IMovieList {
  title: string;
  genre: string;
  director: string;
  plot: string;
  poster: string;
}

export interface IMovieListStates {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export interface IMovieListApi {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: string[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
