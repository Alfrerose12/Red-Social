import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmigosPageRoutingModule } from './amigos-routing.module';

import { AmigosPage } from './amigos.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmigosPageRoutingModule,
    ComponentsModule 
  ],
  declarations: [AmigosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AmigosPageModule {}
