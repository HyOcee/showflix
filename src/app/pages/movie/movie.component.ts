import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AppStoreFacade } from 'src/app/store/facade';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, OnDestroy {
  movie$ = this.storeFacade.selectMovie;
  isLoading$ = this.storeFacade.selectMovieLoading$;

  unsubscribe$ = new Subject<void>();

  searchResults$ = this.storeFacade.selectSearchResults$;

  constructor(
    private storeFacade: AppStoreFacade,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.unsubscribe$)).subscribe((res) => {
      const id = res.get('id');
      this.storeFacade.getMovie(id!);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
