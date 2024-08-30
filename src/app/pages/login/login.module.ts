import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { Componente1Component } from 'src/app/components/componente1/componente1.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';////agregar la libreria del componente de angular

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    MatProgressSpinnerModule ///importarlo
  ],
  declarations: [LoginPage, Componente1Component]
})
export class LoginPageModule {}
