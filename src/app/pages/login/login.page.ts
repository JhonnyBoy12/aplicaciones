import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ///variables
  comuna: string = "Lo Espejo";
  edad: number = 19;
  nombreUsuario: string = "";

  //CREACION DE VARIABLES COMPUESTAS/ARREGLOS ---- propiedades entre "{}"
  arreglo: any = {
    nombre: 'Diego',
    apellido: 'Cruz',
    edad: 47
  }

  //CREACION DE LISTAS/COLECCION --- propiedades entre "[]"

  lista: any = [
    {
      id: 1,
      nombre: "Maríá"
    }
  ]

  //

  constructor(private router:Router) { }

  ngOnInit() {
  }
  irPagina(){

    this.router.navigate(['/agregar']);
  }

}
