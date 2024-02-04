import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TMDBService {
  
  private URL:string = "http://localhost:8085/movie"
  private API_KEY: string = `?api_key=${environment.key}`
  private title = environment.apiaddress

  constructor(private http:HttpClient) { }

  
 
  public getById(token: any , id: any):Observable<any> {
    return this.http.get<any>(`${this.URL}/${id}?token=${token}`);
  }

  getMovies(token:any , pageno?:any , pageSize?:any ): Observable<any> {
    if(pageno == undefined)
    pageno = 0
  if(pageSize == undefined)
  pageSize = 20

    return this.http.get<any>(this.URL+"?token=" + token + "&page=" + pageno + "&size=" + pageSize)
  }

}
