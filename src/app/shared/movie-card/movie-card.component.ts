import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from 'src/app/models';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movie!: IMovie;

  constructor(private router: Router) {}

  showDetails() {
    const queryParamValue = 'your_query_param_value'; // Replace with your desired value
    const queryParams = { imdbID: this.movie.imdbID, title: this.movie.Title, details: 'showing' };
    this.router.navigate([], { queryParams });
  }
}
