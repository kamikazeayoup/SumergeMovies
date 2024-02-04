import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
result: any
  constructor(private router: Router , private authService: AuthService) {
    
  }

  canActivate():boolean {
    const token = localStorage.getItem('token');



      if (token != "") {
        return true;
  
      }
    
      
      else {
        this.router.navigate(['/login']);
        return false;
      }


  }

  setAuthenticated(status: boolean): void {
    if (status) {
      this.router.navigate(['/movie']);
    }
  }  
}
