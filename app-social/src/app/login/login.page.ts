import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})

export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }
  loginFacebook() {
    alert('funciona')
}  
}
