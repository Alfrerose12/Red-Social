import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { UserProfile } from '../models/user-profile.model';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
  standalone: false,
})
export class AjustesPage implements OnInit {

  userProfile: UserProfile | null = null;
  isEditing: boolean = false;

  constructor(
    private apiService: ApiService, 
    private navController: NavController, 
    private alertController: AlertController, 
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.cargarPerfil();
  }

  cargarPerfil() {
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

  async guardarCambios() {
    if (this.userProfile) {
      this.apiService.updateProfile(this.userProfile).subscribe(
        async (response) => {
          console.log('Perfil actualizado:', response);
          this.isEditing = false;
          await this.mostrarAlerta('Perfil actualizado', 'Los cambios se han guardado correctamente');
        },
        async (error) => {
          console.error('Error al actualizar el perfil:', error);
          await this.mostrarAlerta('Error', 'No se han podido guardar los cambios');
        }
      );
    }
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  editarPerfil() {
    this.isEditing = !this.isEditing;
  }

  async cerrarSesion() {

    const loading = await this.loadingController.create({
      message: 'Cerrando sesión...',
      spinner: 'crescent',
    });

    await loading.present();

    setTimeout(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      loading.dismiss();
      this.navController.navigateRoot('/login');
    }, 1000);
  }
}