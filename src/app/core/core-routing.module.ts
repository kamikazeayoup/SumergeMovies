import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { AuthGuard } from '../Auth/authGuard';

const routes: Routes = [
  { path: '', component: HomeComponent , canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent  , canActivate: [AuthGuard]},
  { path: 'movie/:id', component: MovieDetailsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
