import { Component } from '@angular/core';
import { CsvService } from './csv.service';
import { AuthGuard } from '../authGuard';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  csvData: string;
  hide: boolean = false;

  constructor(private csvService: CsvService , private authGuard: AuthGuard , private fb: FormBuilder , private router: Router) {
    this.csvData = ''
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if(isAuthenticated == 'true')
    this.router.navigate(['/home']);
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(1)]]
  })


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
      }
  
      console.log('Invalid credentials');
    });
  }
  
    
}
