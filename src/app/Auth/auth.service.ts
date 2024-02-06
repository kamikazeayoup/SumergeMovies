import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  private loginUrl = environment.authUrl;
  private tokenUrl = environment.validationUrl
  private registerUrl = environment.registerUrl

  constructor(private http: HttpClient) {}

  getLoginDetails( email : string , password : string , token: string): Observable<any> {
    const requestBody = {
      email: email,
      password: password,
      captchaToken: token

    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.loginUrl, requestBody , { responseType: 'json' });
  }
  signUp(username: string , email: string, password: string , token: string): Observable<any> {
    const requestBody = {
      username: username,
      email: email,
      password: password,
      captchaToken: token
      
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.registerUrl, requestBody ,  { headers: headers , responseType: 'text' });
  }

  checkToken( token : any ): Observable<any> {
   
    return this.http.get(this.tokenUrl+'?token='+token);
  }
}
