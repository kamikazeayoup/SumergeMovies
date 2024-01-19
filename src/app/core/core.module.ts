import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MoviesContainerComponent } from './components/movies-container/movies-container.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoreRoutingModule } from './core-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';





@NgModule({
  declarations: [NavbarComponent , HomeComponent , MovieDetailsComponent , MovieItemComponent , MoviesContainerComponent, NotFoundComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreRoutingModule,
  ],
  exports: [
  ],
  providers: [HttpClient],

})
export class CoreModule { }
