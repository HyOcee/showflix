import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './shared/button/button.component';
import { MovieCardComponent } from './shared/movie-card/movie-card.component';
import { AppStoreFacade } from './store/facade';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './store/effects';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './store/reducer';
import { ApiKeyInterceptor } from './api-key-interceptor.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    MovieDetailsComponent,
    LayoutComponent,
    ButtonComponent,
    MovieCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([MovieEffects]),
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    AppStoreFacade,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
