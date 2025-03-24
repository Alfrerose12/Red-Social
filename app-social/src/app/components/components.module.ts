import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FriendsComponent } from './friends/friends.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';



@NgModule({
  declarations: [
    FriendsComponent,
    PublicacionesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FriendsComponent,
    PublicacionesComponent
  ]
})
export class ComponentsModule { }
