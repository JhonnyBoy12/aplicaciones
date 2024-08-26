import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

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

  constructor(private router:Router, private alertController: AlertController, private toastController: ToastController) { }

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
    ///crear la loguca de programacion que requiero
    //this.presentAlert('Titulo alerta', 'Mensaje de la alerta');
    this.presentToast('bottom');
    this.router.navigate(['/agregar'], navigationextras);
  }
  async presentAlert(titulo:string, msj:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hola Mundo',
      duration: 1500,
      position: position,
    });


    await toast.present();
  }

}
