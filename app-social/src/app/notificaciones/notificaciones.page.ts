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
    { id: 1, mensaje: 'Carlos Méndez y Sofía Ríos han reaccionado a tu comentario en Xalapa, Ver.', fecha: new Date(Date.now() - 5 * 60 * 60 * 1000), leido: false, imagen: 'https://www.example.com/carlos.jpg', leGusto: true },
    { id: 2, mensaje: 'Mariana López ha compartido tu publicación en Emprendedores Veracruz.', fecha: new Date(Date.now() - 22 * 60 * 60 * 1000), leido: false, imagen: 'https://www.example.com/mariana.jpg', leGusto: false },
    { id: 3, mensaje: 'Publica Promoción de celulares en más grupos para alcanzar más clientes.', fecha: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), leido: true, imagen: 'https://www.example.com/promo.jpg', leGusto: true },
    { id: 4, mensaje: 'Ahora en VERACRUZ, Ver: ¡Nueva colección de ropa de temporada disponible!', fecha: new Date(Date.now() - 10 * 60 * 60 * 1000), leido: false, imagen: 'https://www.example.com/ropa.jpg', leGusto: false }
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

  // Método para calcular tiempo transcurrido
  tiempoTranscurrido(fecha: Date): string {
    const diferencia = Date.now() - fecha.getTime();
    const horas = Math.floor(diferencia / (1000 * 60 * 60));

    return horas < 24 ? `${horas} h` : `${Math.floor(horas / 24)} día(s)`;
  }
}
//