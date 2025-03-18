import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NavController } from '@ionic/angular';

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
  constructor(private router: Router) {}

  ngOnInit() {
    // Inicializar FacebookLogin en Capacitor (si no lo has hecho antes)
    FacebookLogin.initialize({ appId: '1174025107505497' });
  }

  async sesion() {
    if (!this.email || !this.password) {
      this.mostrarAlerta('Error', 'Todos los campos son obligatorios');
      return;
    }

    this.apiService.login({ email: this.email, password: this.password }).subscribe((response) => {
      console.log(response);
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
  async sesionFacebook() {
    try {
      // Solicita el login con Facebook
      const response = await FacebookLogin.login({ permissions: ['email', 'public_profile'] });

      if (response.accessToken) {
        console.log('Token de acceso:', response.accessToken.token);
        this.router.navigate(['/tabs/inicio']); // Redirigir después del login
      } else {
        console.log('Inicio de sesión cancelado.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión con Facebook:', error);
    }
  }

  async cerrarSesionFacebook() {
    try {
      // Cerrar sesión con Facebook
      await FacebookLogin.logout();
      console.log('Sesión de Facebook cerrada');
    } catch (error) {
      console.error('Error al cerrar sesión de Facebook:', error);
    }
  }
  sesion(){
    
  }

  sesionGoogle() {
    window.location.href = 'http://localhost:3003/api/auth/google';
  }
}
