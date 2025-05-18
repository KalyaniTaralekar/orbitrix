import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviornments/enviornment';
import { Observable } from 'rxjs';
import { Apod } from '../models/apod.model';

@Injectable({
  providedIn: 'root'
})
export class ApodService {
 private apiUrl = 'https://api.nasa.gov/planetary/apod';

  constructor(private http: HttpClient) { }
  
  getApod():Observable<Apod>
  {
    return this.http.get<Apod>(`${this.apiUrl}?api_key=${environment.nasaApiKey}`);
  }
}