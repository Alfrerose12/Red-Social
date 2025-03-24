import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
  standalone: false
})
export class PublicacionesComponent  implements OnInit {

  @Input() post:any;

  constructor() { }

  ngOnInit() {}

}
