import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8083/api/auth/login';
  private tokenUrl = 'http://localhost:8080/api/validate'

  constructor(private http: HttpClient) {}

  getLoginDetails( email : string , password : string): Observable<any> {
    const requestBody = {
      email: email,
      password: password
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.loginUrl, requestBody , { responseType: 'json' });
  }

  checkToken( token : any ): Observable<any> {
   
    return this.http.get(this.tokenUrl+'?token='+token);
  }
}
