import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvService {
  private csvDataUrl = '../../assets/data/users.csv';

  constructor(private http: HttpClient) {}

  getCsvData(): Observable<string> {
    return this.http.get(this.csvDataUrl, { responseType: 'text' });
  }
}
