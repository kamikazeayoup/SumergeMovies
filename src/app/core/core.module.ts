import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MoviesContainerComponent } from './components/movies-container/movies-container.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [FilterComponent , HomeComponent , MovieDetailsComponent , MovieItemComponent , MoviesContainerComponent ],
  imports: [
    CommonModule,
    FormsModule, 
    HttpClientModule,
    CoreRoutingModule,

  ],
})
export class CoreModule { }
