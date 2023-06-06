export interface IMovie {
  Title: string;
  Poster: string; // image url
  imdbID: string;
}

export interface IMovieDetail extends IMovie {
  Plot: string;
  Released: string;
  imdbRating: string;
}

export interface ISearchResponse {
  Search: IMovieDetail[];
  totalResults: number;
  Response: string;
}