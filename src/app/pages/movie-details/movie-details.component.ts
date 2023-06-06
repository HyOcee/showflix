import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { slideInOut } from 'src/app/animations/animations';
import { AppStoreFacade } from 'src/app/store/facade';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  animations: [slideInOut],
})
export class MovieDetailsComponent implements OnDestroy {
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

  ngOnDestroy(): void {
      this.storeFacade.clearMovieDetails()
  }
}
