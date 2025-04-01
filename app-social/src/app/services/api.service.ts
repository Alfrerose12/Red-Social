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


  createPost(postData: { content: string }): Observable<any> {
    const token = localStorage.getItem('token'); // Obtén el token del almacenamiento local
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`, // Incluye el token en el encabezado
      'Content-Type': 'application/json', // Asegúrate de que el contenido sea JSON
    });
  
    console.log('Token enviado:', token); // Verifica el token
    console.log('Datos enviados al backend:', postData); // Verifica los datos enviados
  
    return this.http.post(`${this.apiUrl}/posts`, postData, { headers });
  }

  getPosts(): Observable<any> {
    const token = localStorage.getItem('token');
    console.log('Token enviado:', token); // Verifica el token
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  
    return this.http.get(`${this.apiUrl}/posts`, { headers });
  }

 // Eliminar una publicación
 deletePost(postId: string): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });

  return this.http.delete(`${this.apiUrl}/posts/${postId}`, { headers });
}

addComment(comment: { text: string; postId: string }): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });

  return this.http.post(`${this.apiUrl}/comments`, comment, { headers });
}

getComments(postId: string): Observable<any> {
  return this.http.get(`${this.apiUrl}/comments/${postId}`);
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

  

  updateProfile(profileData: { name?: string; email?: string; profilePicture?: string }): Observable<any> {
    const token = localStorage.getItem('token'); // Obtener el token del almacenamiento local
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}` // Incluir el token en los encabezados
    });
  
    return this.http.put(`${this.apiUrl}/profile`, profileData, { headers }).pipe(
      tap((response) => console.log('Perfil actualizado:', response)), // Log para depuración
      catchError((error) => {
        console.error('Error al actualizar el perfil:', error); // Log de errores
        return throwError(error); // Manejo de errores
      })
    );
  }


  googleAuth(): void {
    window.location.href = `${this.apiUrl}/auth/google`;
  }

}
