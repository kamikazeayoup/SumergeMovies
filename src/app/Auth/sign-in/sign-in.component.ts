import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../authGuard';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
}) 
export class SigninComponent {
  hide: boolean = false;
  incorrectInputs: boolean = false;
  token: any;
  result: any


  constructor(private authService: AuthService , private authGuard: AuthGuard , private fb: FormBuilder , private router: Router) {
     this.token = localStorage.getItem('token');
     if(this.token != ""){
      this.router.navigate(['/movie']); 
      console.log("Hola Amegos")
    }
   
   
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(1)]]
  })
  
  get email(){
    return this.loginForm.get('email');
  }

  signIn(): void {
    if (!this.loginForm.valid) {
      return;
    }

    
  
    this.authService.getLoginDetails(this.loginForm.value.email , this.loginForm.value.password).subscribe((data: any) => {
      console.log(data)
  
          localStorage.setItem('token', data.accessToken);
          this.authGuard.setAuthenticated(true);


  
    },(error) => {
      console.error('API Error:', error);
      this.incorrectInputs = true;

    });
  }
  navigateToSignUp() {
    this.router.navigate(['/register']);
  }
  
    
}
