import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

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
    edad: 25
  }

  //CREACION DE LISTAS/COLECCION --- propiedades entre "[]"

  lista: any = [
    {
      id: 1,
      nombre: "Maríá"
    },
    {
      id: 2,
      nombre: "José"
    },
    {
      id: 3,
      nombre: "Juan"
    }
  ]

  //

  constructor(private router:Router) { }

  ngOnInit() {
  }
  irPagina(){

    //creamos la variable de contexto
    let navigationextras: NavigationExtras = {
      state:{
        com: this.comuna,
        ed: this.edad,
        user: this.nombreUsuario
      }
    }

    this.router.navigate(['/agregar'], navigationextras);
  }

}
