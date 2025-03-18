import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  sesion() {
    
  }

  sesionGoogle() {
    window.location.href = 'http://localhost:3003/api/auth/google';
  }

}
