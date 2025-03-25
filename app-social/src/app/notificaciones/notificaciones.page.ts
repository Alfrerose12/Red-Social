import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class NotificacionesPage {
  notificaciones = [
    { id: 1, mensaje: 'Carlos Méndez y Sofía Ríos han reaccionado a tu comentario en Xalapa, Ver.', fecha: new Date(Date.now() - 5 * 60 * 60 * 1000), leido: false, imagen: 'https://i.pinimg.com/564x/9d/6b/9d/9d6b9db2dcb0526a09b89fb35d075c72.jpg', tipo: 'like' },
    { id: 2, mensaje: 'Mariana López ha compartido tu publicación en Emprendedores Veracruz.', fecha: new Date(Date.now() - 22 * 60 * 60 * 1000), leido: false, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtGf9xyl-cBnrnZrBaMnxfG19g9d4HChSglw&s', tipo: 'compartido' },
    { id: 3, mensaje: 'Publica Promoción de celulares en más grupos para alcanzar más clientes.', fecha: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), leido: true, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPSmmKm0bH3mabimaLCdzQ388vVui1iVdUw&s', tipo: 'noticia' },
    { id: 4, mensaje: 'Ahora en VERACRUZ, Ver: ¡Nueva colección de ropa de temporada disponible!', fecha: new Date(Date.now() - 10 * 60 * 60 * 1000), leido: false, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiPDGVPMCKGrz6lzYhV3vI9onQ4OsTQp5oFQ&s', tipo: 'noticia' },
    { id: 5, mensaje: 'Luis Gómez comentó en tu publicación.', fecha: new Date(Date.now() - 2 * 60 * 60 * 1000), leido: false, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMVcjb3BwuJ10cQy2998K70ZLSGBNjamcEw&s', tipo: 'comentario' },
    { id: 6, mensaje: 'Ana Torres y 3 personas más comentaron en tu publicación.', fecha: new Date(Date.now() - 4 * 60 * 60 * 1000), leido: false, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5tjGY0ZSXLiSZINyW0NFFNbR7CH-R2Ih0A&s', tipo: 'comentario' }
  ];

  get notificacionesNoLeidas() {
    return this.notificaciones.filter(n => !n.leido).length;
  }

  marcarComoLeida(id: number) {
    const notificacion = this.notificaciones.find(n => n.id === id);
    if (notificacion) {
      notificacion.leido = true;
    }
  }

  eliminarNotificacion(id: number) {
    this.notificaciones = this.notificaciones.filter(n => n.id !== id);
  }

  tiempoTranscurrido(fecha: Date): string {
    const diferencia = Date.now() - fecha.getTime();
    const horas = Math.floor(diferencia / (1000 * 60 * 60));
    return horas < 24 ? `${horas} h` : `${Math.floor(horas / 24)} día(s)`;
  }
}
