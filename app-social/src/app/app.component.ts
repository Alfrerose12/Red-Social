import { Component, OnInit } from '@angular/core';

declare var FB: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    this.loadFacebookSDK().then(() => {
      console.log('Facebook SDK cargado y listo');
      // Aquí puedes iniciar sesión u otras interacciones con el SDK de Facebook
    }).catch((error) => {
      console.error('Error al cargar el SDK de Facebook:', error);
    });
  }

  loadFacebookSDK(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof FB === 'undefined') {
        (window as any).fbAsyncInit = () => {
          FB.init({
            appId: '1174025107505497', 
            cookie: true,
            xfbml: true,
            version: 'v22.0', 
          });
          console.log('Facebook SDK inicializado');
          resolve(); 
        };

        // Cargar el script del SDK
        const script = document.createElement('script');
        script.id = 'facebook-jssdk';
        script.src = 'https://connect.facebook.net/en_US/sdk.js';
        script.async = true;
        script.defer = true;
        script.onload = () => {
          console.log('Script del SDK de Facebook cargado');
        };
        script.onerror = (error) => {
          console.error('Error al cargar el SDK de Facebook', error);
          reject(error); 
        };
        document.body.appendChild(script);
      } else {
        resolve(); 
      }
    });
  }
}
