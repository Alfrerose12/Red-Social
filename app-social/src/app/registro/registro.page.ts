import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NavController } from '@ionic/angular';

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

  constructor(private apiService: ApiService, private navController: NavController) { }

  ngOnInit() {
  }

  registro() {
    const credentials = {
      name: this.name,
      email: this.email,
      password: this.password
    };
    this.apiService.register(credentials).subscribe((response) => {
      console.log(response);
      this.navController.navigateForward('/login');
    }
    );
  }

}
