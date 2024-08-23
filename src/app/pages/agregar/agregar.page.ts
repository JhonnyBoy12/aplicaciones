import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {


  ///crear variables que se van a recibir de la pagina login

  Comuna: string = ""
  Edad!: Number; ////no inicializar la variable 
  Usuario: string = "";

  constructor(private router: Router, private activedroute: ActivatedRoute) { 
    //Realizar la captura de la informacion que viene por navigationExtras

    this.activedroute.queryParams.subscribe(param=>{
      //validamos si viene o no la informacion
    if (this.router.getCurrentNavigation()?.extras.state){
      //capturamos la informacion
      this.Usuario = this.router.getCurrentNavigation()?.extras?.state?.['user'];
      this.Edad= this.router.getCurrentNavigation()?.extras?.state?.['ed'];
      this.Comuna= this.router.getCurrentNavigation()?.extras?.state?.['com'];
    }
  });
  
  }
  ngOnInit() {
  }

}
