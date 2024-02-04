import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../authGuard';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  hide: boolean = false;
  incorrectInputs: boolean = false;
  viewError: string = "";
  token: any;
  result: any

  constructor(private authService: AuthService , private authGuard: AuthGuard , private fb: FormBuilder , private router: Router){
    this.token = localStorage.getItem('token');
     if(this.token != ""){
      this.router.navigate(['/movie']); 
      console.log("Hola Amegos")
     }
  }

  signupForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(1)]], 
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(1)]]
  })
  
  get email(){
    return this.signupForm.get('email');
  }
  get username(){
    return this.signupForm.get('username');
  }
  signUp(): void {
    if (!this.signupForm.valid) {
      return; 
    }

    this.authService.signUp(this.signupForm.value.username , this.signupForm.value.email , this.signupForm.value.password).subscribe((data: any) => {
      
      this.router.navigate(['/login'])
  
    },(error) => {
      console.error('API Error:', error);

      this.viewError = error.error;
      this.incorrectInputs = true;

    });
  }
} 
