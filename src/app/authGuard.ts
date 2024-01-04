import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isAuthenticated: boolean = false; // Initially set to false

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (isAuthenticated && isAuthenticated === 'true') {
        console.log(this.isAuthenticated)
      return true; // User is authenticated
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  setAuthenticated(status: boolean): void {
    this.isAuthenticated = status;
    if (status) {
      // If authentication is successful, redirect to '/home'
      this.router.navigate(['/home']);
    }
  }  
}
