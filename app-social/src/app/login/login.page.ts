import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private navController: NavController, private alertController: AlertController) { }

  ngOnInit() {
  }

  async sesion() {
    if (!this.email || !this.password) {
      this.mostrarAlerta('Error', 'Todos los campos son obligatorios');
      return;
    }

    this.apiService.login({ email: this.email, password: this.password }).subscribe((response) => {
      console.log(response);
      this.mostrarAlerta('Éxito', 'Iniciaste sesión correctamente');
      this.navController.navigateForward('/tabs/inicio');
    },
      async (error) => {
        console.log('Error en el registro: ', error);
        this.mostrarAlerta('Error', 'Error al iniciar sesión')
      }
    );
  }
  
  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Cerrar']
    });
    await alert.present();
  }

  sesionGoogle() {
    window.location.href = 'http://localhost:3003/api/auth/google';
  }

}
