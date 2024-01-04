import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './authGuard';

const routes: Routes = [
  {path:"", component:HomeComponent , canActivate: [AuthGuard]},
  {path:"home", component:HomeComponent , canActivate: [AuthGuard]},
  {path: "login" , component:SigninComponent},
  {path:"movie/:id", component:MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
