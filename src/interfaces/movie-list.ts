// Interface for movie card object used in each MovieCard component
export interface IMovieList {
  id: string;
  title: string;
  genre: string;
  director: string;
  plot: string;
  poster: string;
}

// Interface to handle state of movie list in Homepage
export interface IMovieListStates {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

// Interface for the API response from OMDB movie API
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
