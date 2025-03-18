import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UserProfile } from '../models/user-profile.model'; // Importa la interfaz


@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
  standalone: false
})
export class AjustesPage implements OnInit {
  userProfile: UserProfile | null = null; // Define el tipo de la variable

  constructor(private apiService: ApiService) { }

  
  ngOnInit() {
    const userId = localStorage.getItem('userId');
    console.log('userId obtenido de localStorage:', userId); // Log para verificar el userId
    if (userId) {
      this.apiService.getProfile(userId).subscribe(
        (response) => {
          console.log('Respuesta del backend:', response);
          this.userProfile = response;
        },
        (error) => {
          console.error('Error al obtener el perfil del usuario:', error);
        }
      );
    } else {
      console.error('No se encontró el userId en localStorage');
    }
  }
}
