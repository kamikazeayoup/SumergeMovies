import { Component } from '@angular/core';
import { CsvService } from '../csv.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../authGuard';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
}) 
export class SigninComponent {
  csvData: string;
  hide: boolean = false;
  incorrectInputs: boolean = false;

  constructor(private csvService: CsvService , private authGuard: AuthGuard , private fb: FormBuilder , private router: Router) {
    this.csvData = ''
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if(isAuthenticated == 'true')
    this.router.navigate(['/movie']);
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

    
  
    this.csvService.getCsvData().subscribe((data: string) => {
      this.csvData = data;
      const rows = this.csvData.split('\n').slice(1); 
  
      for (const row of rows) {
        const [csvEmail, csvPassword] = row.split(',');

        if (csvEmail.trim() === this.loginForm.value.email && csvPassword.trim() === this.loginForm.value.password) {
          localStorage.setItem('isAuthenticated', 'true');
          this.authGuard.setAuthenticated(true);

          return;
        }

        this.incorrectInputs = true;

      }
  
      console.log('Invalid credentials');
    });
  }
  
    
}
