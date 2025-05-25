import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
  import { MarsPhoto } from '../models/mars-gallery.model';
import { Observable, map } from 'rxjs';
import { environment } from 'enviornments/enviornment';

@Injectable({
  providedIn: 'root',
})
export class MarsService {
  private baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers';
  defaultRover = 'Perseverance';
  constructor(private http: HttpClient) {}

  getPhotos(rover?: string): Observable<MarsPhoto[]> {
    let httpParams = new HttpParams().set('api_key', environment.nasaApiKey);
    return this.http
      .get<{ latest_photos: MarsPhoto[] }>(
        `${this.baseUrl}/${rover}/latest_photos`,
        { params: httpParams }
      )
      .pipe(map((res) => res.latest_photos));
  }
}
