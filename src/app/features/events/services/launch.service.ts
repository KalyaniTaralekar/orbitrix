import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LaunchInfo } from '../models/launch.model';

@Injectable({
  providedIn: 'root',
})
export class LaunchService {
  private baseUrl = 'https://ll.thespacedevs.com/2.2.0/launch';

  constructor(private http: HttpClient) {}

  getLaunchInfo(launch?: string): Observable<LaunchInfo> {
    return this.http.get<LaunchInfo>(`${this.baseUrl}/${launch}/?limit=100`);
  }
}
