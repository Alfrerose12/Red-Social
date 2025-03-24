import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage implements OnInit {

  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private apiService: ApiService, private navController: NavController, private alertController: AlertController) { }

  ngOnInit() {
  }

  async registro() {

    if (!this.name || !this.email || !this.password) {
      this.mostrarAlerta('Error', 'Todos los campos son obligatorios');
      return;
    }

    if(this.password !== this.confirmPassword) {
      this.mostrarAlerta('Error', 'Las contraseñas no coinciden');
      return;
    }

    this.apiService.register({ name: this.name, email: this.email, password: this.password }).subscribe((response) => {
      console.log(response);
      this.mostrarAlerta('Éxito', 'Usuario registrado correctamente');
      this.navController.navigateForward('/login');
    },
      async (error) => {
        console.log('Error en el registro:', error);
        this.mostrarAlerta('Error', 'Error al registrar el usuario');
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
}
