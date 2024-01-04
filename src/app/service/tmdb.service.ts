import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import data from './API-Key.json'
@Injectable({
  providedIn: 'root'
})
export class TMDBService {
  
  private URL:string = `https://api.themoviedb.org/3/movie`
  private API_KEY: string = `?api_key=${data.key}`
  private title = environment.apiUrl

  constructor(private http:HttpClient) { }

  

  public getById(id:string):Observable<any> {
    return this.http.get<any>(`${this.URL}/${id}${this.API_KEY}`);
  }

  getTopRatedMovies(pageno?:number): Observable<any> {
    const pageNumber = pageno ? `&page=${pageno}` : '&page=1';
    return this.http.get<any>(`${this.URL}/${this.title}${this.API_KEY}${pageNumber}`);
  }

}
