import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';


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
  {path: "register" , 
  component: SignUpComponent
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
