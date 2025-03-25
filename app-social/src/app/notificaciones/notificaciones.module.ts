import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NotificacionesPageRoutingModule } from './notificaciones-routing.module';
import { NotificacionesPage } from './notificaciones.page'; // Importar el componente

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificacionesPageRoutingModule,
    NotificacionesPage 
  ]
})
export class NotificacionesPageModule {}
