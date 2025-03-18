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

  constructor(private apiService: ApiService, private navController: NavController) { }

  ngOnInit() {
  }

  sesion() {
    const credentials = {
      email: this.email,
      password: this.password
    };
    this.apiService.login(credentials).subscribe((response) => {
      console.log(response);
      this.navController.navigateForward('/tabs/inicio');
    },
      (error) => {
        console.log('Error en el login:', error);
      }
    );
  }

  sesionGoogle() {
    window.location.href = 'http://localhost:3003/api/auth/google';
  }

}
