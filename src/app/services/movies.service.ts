import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IMovieDetail, ISearchResponse } from '../models';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMoviesBySearchQuery(s: string, page = 1) {
    return this.http.get<ISearchResponse>(`${environment.movieApi}`, {
      params: { s, page },
    });
  }

  getMovieDetails(i: string) {
    return this.http.get<IMovieDetail & { Response: string }>(
      `${environment.movieApi}`,
      {
        params: { i },
      }
    );
  }
}
