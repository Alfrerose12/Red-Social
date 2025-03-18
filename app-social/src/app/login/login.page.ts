import { Component, OnInit } from '@angular/core';
import { FacebookLogin } from '@capacitor-community/facebook-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    // Inicializar FacebookLogin en Capacitor (si no lo has hecho antes)
    FacebookLogin.initialize({ appId: '1174025107505497' });
  }

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
