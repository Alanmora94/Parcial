import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';


//**********FORMULARIO */
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



//********MODULO PROPIO */
import {ComponenteModule} from '../Componentes/componente.module'



//**************COMPONENTES */


import { MenuComponent } from './menu/menu.component';
import { LogUpComponent } from './log-up/log-up.component';
import { LogInComponent } from './log-in/log-in.component';


//**************MATERIAL */

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import { EstablecimientoComponent } from './establecimiento/establecimiento.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { DetalleComponent } from './detalle/detalle.component';
import { GrillaAvanzadaComponent } from './grilla-avanzada/grilla-avanzada.component';



//**************SERVICIOS */

//import {LoginService} from './../Servicios/sesion/login.service';
//import {TokenService} from './../Servicios/sesion/token.service';


@NgModule({
  declarations: [MenuComponent, LogUpComponent, LogInComponent, HomeComponent, EstablecimientoComponent, VehiculoComponent, DetalleComponent, GrillaAvanzadaComponent],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,

    //****MOdulo Propio */
    ComponenteModule,

    //*****MATERIAL */
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSelectModule,
    PageRoutingModule,



  ],

  //providers: [LoginService,TokenService],
  exports: [MenuComponent, LogUpComponent, LogInComponent]
})
export class PageModule { }
