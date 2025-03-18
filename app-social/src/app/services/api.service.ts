import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3003/api';

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string }): Observable<any> {
    const endpoint = 'login';
    return this.http.post(`${this.apiUrl}/${endpoint}`, credentials);
  }

  register(credentials: { name: string, email: string, password: string }): Observable<any> {
    const endpoint = 'register';
    return this.http.post(`${this.apiUrl}/${endpoint}`, credentials);
  }

}
