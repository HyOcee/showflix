import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { AppStoreFacade } from 'src/app/store/facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchForm!: FormGroup;

  searchResults$ = this.appStoreFacade.selectSearchResults$;

  constructor(
    private fb: FormBuilder,
    private appStoreFacade: AppStoreFacade
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      s: ['', Validators.required],
    });

    this.appStoreFacade.searchQuery$
      .pipe(take(1))
      .subscribe((res) => this.searchForm.get('s')?.patchValue(res));
  }

  search() {
    this.appStoreFacade.searchMovies(this.searchForm.value.s);
  }
}
