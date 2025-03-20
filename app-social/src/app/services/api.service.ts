import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

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

  createPost(postData: {content: string}): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts`, postData);
  }

  deletePost(postId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/posts/${postId}`);
  }

  addComment(commentData: {postId: string; text: string}): Observable<any> {
    return this.http.post(`${this.apiUrl}/comments`, commentData);
  }

  likePost(postId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/likes`, { postId });
  }
  getProfile(): Observable<any> {
    const token = localStorage.getItem('token'); 
    console.log('Token enviado:', token);
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}` 
    });
  
    return this.http.get(`${this.apiUrl}/profile`, { headers }).pipe(
      tap((response) => console.log('Respuesta del backend:', response)), 
      catchError((error) => {
        console.error('Error al obtener el perfil:', error); 
        return throwError(error);
      })
    );
  }


  googleAuth(): void {
    window.location.href = `${this.apiUrl}/auth/google`;
  }

}
