import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviornments/enviornment';
import { AsteroidFeed } from '../models/asteroids.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsteroidsService {
  private apiUrl = 'https://api.nasa.gov/neo/rest/v1/feed';

  constructor(private http: HttpClient) {}

  getAsteroidData(
    startDate: string,
    endDate: string
  ): Observable<any
    > {
    let httpParams = new HttpParams()
      .set('start_date', startDate)
      .set('end_date', endDate)
      .set('api_key', environment.nasaApiKey);

    return this.http.get<any>(`${this.apiUrl}`, {
      params: httpParams,
    });
    
  }
}
