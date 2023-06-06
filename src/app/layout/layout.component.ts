import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppStoreFacade } from '../store/facade';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  showMovieDetailsPage = false;
  navOpen$ = this.storeFacade.navOpen$

  constructor(
    private route: ActivatedRoute,
    private storeFacade: AppStoreFacade
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((res) => {
      if (res.get('details')) {
        this.storeFacade.getMovieDetails(res.get('imdbID')!);
        this.showMovieDetailsPage = true;
      } else {
        this.storeFacade.clearMovieDetails();
        this.showMovieDetailsPage = false;
      }
    });
  }

  toggleNav() {
    this.storeFacade.toggleNav()
  }

  closeNav() {
    this.storeFacade.closeNav()
  }
}
