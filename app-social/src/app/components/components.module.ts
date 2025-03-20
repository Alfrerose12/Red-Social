import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FriendsComponent } from './friends/friends.component';



@NgModule({
  declarations: [
    FriendsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FriendsComponent
  ]
})
export class ComponentsModule { }
