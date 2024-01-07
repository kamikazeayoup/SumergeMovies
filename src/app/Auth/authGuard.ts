import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = localStorage.getItem('isAuthenticated');


   if (isAuthenticated == 'true') {
    console.log("yes authenticated")

      return true;

    }
  
    
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  setAuthenticated(status: boolean): void {
    if (status) {
      this.router.navigate(['/home']);
    }
  }  
}