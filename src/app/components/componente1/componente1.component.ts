import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss'],
})
export class Componente1Component  implements OnInit {

  @Input()titulo:string = "";///tiene que estar al inicio de las variables
  @Input()datos:any;
  comuna:string ="";
  constructor() { }

  ngOnInit() {}

}
