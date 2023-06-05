import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AppStoreFacade } from 'src/app/store/facade';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  movieDetails$ = this.storeFacade.selectMovieDetails$;

  back() {
    this.router.navigate([]);
  }

  watchMovie() {
    this.movieDetails$.pipe(take(1)).subscribe((movieDetails) => {
      const imdbID = movieDetails?.imdbID;
      this.router.navigate(['/movie', imdbID]);
    });
  }

  constructor(private storeFacade: AppStoreFacade, private router: Router) {}
}
