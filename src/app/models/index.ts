export interface IMovie {
  Title: string;
  Poster: string; // image url
  imdbID: string;
}

export interface IMovieDetail extends IMovie {
  Plot: string;
}

export interface ISearchResponse {
  Search: IMovieDetail[];
  totalResults: number;
  Response: string;
}