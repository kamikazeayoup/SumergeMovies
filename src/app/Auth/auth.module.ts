import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './sign-in/sign-in.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SigninComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    SharedModule
  ],
})
export class AuthModule { }
