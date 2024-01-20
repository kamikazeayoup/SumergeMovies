import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { NotFoundComponent } from './core/components/not-found/not-found.component';


const routes: Routes = [

  {
    path: "", 
    loadChildren: () => AuthModule
  },
  {
    path: "movie" ,
   loadChildren: () =>
   import('./core/core.module').then((m)=>m.CoreModule),
  },
  {path: "login" ,
   loadChildren: () => AuthModule
  },
  {
    path: "not-found",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "not-found",
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
