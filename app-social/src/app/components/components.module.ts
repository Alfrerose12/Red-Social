import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { IonicModule } from '@ionic/angular';
import { CardPostComponent } from './card-post/card-post.component';
import { HistoryComponent } from './history/history.component';



@NgModule({
  declarations: [
    LayoutComponent,
    CardPostComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LayoutComponent,
    CardPostComponent,
    HistoryComponent
  ]
})
export class ComponentsModule { }
