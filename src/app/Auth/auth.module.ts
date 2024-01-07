import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SigninComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule
  ],
})
export class AuthModule { }
