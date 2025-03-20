import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NavController } from '@ionic/angular';
import { UserProfile } from '../models/user-profile.model';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
  standalone: false,
})
export class AjustesPage implements OnInit {
  userProfile: UserProfile | null = null;

  constructor(private apiService: ApiService, private navController: NavController) {}

  ngOnInit() {
    this.apiService.getProfile().subscribe(
      (response) => {
        console.log('Perfil del usuario recibido:', response);
        this.userProfile = response;
      },
      (error) => {
        console.error('Error al obtener el perfil del usuario:', error);
      }
    );
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');

    this.navController.navigateRoot('/login');
  }
}