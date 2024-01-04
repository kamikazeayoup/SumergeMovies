import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { FilterComponent } from './filter/filter.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesContainerComponent,
    MovieItemComponent,
    MovieDetailsComponent,
    FilterComponent,
    SigninComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
