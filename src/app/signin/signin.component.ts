import { Component } from '@angular/core';
import { CsvService } from '../service/csv.service';
import { AuthGuard } from '../authGuard';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  csvData: string;
  email: string;
  password: string;
  constructor(private csvService: CsvService , private authGuard: AuthGuard) {
    this.csvData = ''
    this.email = '' , 
    this.password = ''
  }

  get isEmailValid(): boolean {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email);
  }

  signIn(): void {
    if (!this.isEmailValid) {
      console.log('Invalid email format');
      return;
    }
  
    this.csvService.getCsvData().subscribe((data: string) => {
      this.csvData = data;
      console.log('Data:', data);
  
      // Assuming the CSV data has been loaded previously in this.csvData
      const rows = this.csvData.split('\n').slice(1); // Skip header row
      console.log('Rows:', rows);
  
      for (const row of rows) {
        const [csvEmail, csvPassword] = row.split(',');

        if (csvEmail.trim() === this.email && csvPassword.trim() === this.password) {
          console.log('Sign-in successful');
          localStorage.setItem('isAuthenticated', 'true');
          this.authGuard.setAuthenticated(true);

          return;
        }
      }
  
      console.log('Invalid credentials');
      // Handle invalid credentials here, such as showing an error message
    });
  }
  
    
}
