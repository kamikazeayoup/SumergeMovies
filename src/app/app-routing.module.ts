import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth/authGuard';
import { AuthModule } from './Auth/auth.module';


const routes: Routes = [

  {path: "" ,
   loadChildren: () =>
   import('../app/core/core.module').then((m)=>m.CoreModule),
  },
  {path: "login" ,
   loadChildren: () => AuthModule
   
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
