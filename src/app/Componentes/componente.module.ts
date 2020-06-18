import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//***********PIPE */

//import { ConvertirAImagenPipe } from '../Pipes/convertir-aimagen.pipe';

//**********FORMULARIO */
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {LogInLComponent} from './Formularios/log-in-l/log-in-l.component'
import { BotonLogOutComponent } from './Formularios/boton-log-out/boton-log-out.component';
import { LogUpLComponent } from './Formularios/log-up-l/log-up-l.component';
import {EstablecimientoLComponent} from '../Componentes/Formularios/establecimiento-l/establecimiento-l.component'


import { EstablecimientoActualComponent } from './Basicos/establecimiento-actual/establecimiento-actual.component';
import { TodoComponent } from './Grillas/Vehiculo/todo/todo.component';
import { ExportComponent } from './Grillas/Vehiculo/export/export.component';
import { AltaVehiculoComponent } from './Formularios/alta-vehiculo/alta-vehiculo.component';



import { ComponenteRoutingModule } from './componente-routing.module';


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


import {CdkTableModule} from '@angular/cdk/table';
import { MatTableExporterModule } from 'mat-table-exporter';

import {MatPaginatorModule} from '@angular/material/paginator';


//**************SERVICIOS */

import {SesionService} from '../Servicios/sesion.service';
import {TokService} from '../Servicios/tok.service';
import {CookiesService} from '../Servicios/cookies.service';
import {DBService} from '../Servicios/db.service';
import {FiltrosService} from '../Servicios/filtros.service'
import {GenerarListaService} from '../Servicios/GrillaExport/generar-lista.service';
import {GenerarObjDetalleService} from '../Servicios/Detalle/generar-obj-detalle.service';




//*********************************SMART TABLE */

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AnioComponent } from './Grillas/Vehiculo/Validadores/anio/anio.component';
import { MarcaComponent } from './Grillas/Vehiculo/Validadores/marca/marca.component';
import { ModeloComponent } from './Grillas/Vehiculo/Validadores/modelo/modelo.component';
import { TipoComponent } from './Grillas/Vehiculo/Validadores/tipo/tipo.component';
import { ImagenComponent } from './Grillas/Vehiculo/Validadores/imagen/imagen.component';
import { KilometrosComponent } from './Grillas/Vehiculo/Validadores/kilometros/kilometros.component';
import { DatoCargadoComponent } from './Grillas/dato-cargado/dato-cargado.component';
import { ImgEditorComponent } from './Grillas/Vehiculo/Validadores/img-editor/img-editor.component';
import { CodigoQRComponent } from './Basicos/codigo-qr/codigo-qr.component';




//*******************************CODIGO QR */

import { QRCodeModule } from 'angularx-qrcode';
import { MapaComponent } from './Basicos/Mapas/mapa/mapa.component';
import { AutocompletarComponent } from './Basicos/Mapas/autocompletar/autocompletar.component';



//*********************************MAPAS */


import {GMapModule} from 'primeng/gmap';
import { EstablecimientosButtonComponent } from './Basicos/Botones/establecimientos-button/establecimientos-button.component';
import { DetAComponent } from './Detalle/det-a/det-a.component';
import { BotonDetalleComponent } from './Grillas/Vehiculo/Validadores/boton-detalle/boton-detalle.component';
import { imagenCon } from './Pipes/convertir-aimagen.pipe';
import { LocalesComponent } from './Formularios/locales/locales.component';
import { ProductoComponent } from './Formularios/producto/producto.component';
import { LocalBotonComponent } from './Basicos/Botones/local-boton/local-boton.component';



@NgModule({
  declarations: [ExportComponent,LogInLComponent, LogUpLComponent, BotonLogOutComponent,
  EstablecimientoLComponent, AltaVehiculoComponent, EstablecimientoActualComponent,
   TodoComponent, ExportComponent, AnioComponent, MarcaComponent, ModeloComponent, TipoComponent, ImagenComponent,
   KilometrosComponent, DatoCargadoComponent, ImgEditorComponent, CodigoQRComponent, MapaComponent, AutocompletarComponent,
   EstablecimientosButtonComponent,
   DetAComponent,
   BotonDetalleComponent,
   imagenCon,
   LocalesComponent,
   ProductoComponent,
   LocalBotonComponent],
  imports: [
    CommonModule,
    ComponenteRoutingModule,

    //******FORMULARIOS */
    FormsModule,
    ReactiveFormsModule,


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
    CdkTableModule,
    MatTableExporterModule,
    MatPaginatorModule,

    //*****SMART */


    Ng2SmartTableModule,


    //*******CODIGO QR */

    QRCodeModule,


    //*********MAPAS */


    GMapModule


  ],

  providers: [SesionService,TokService,SesionService,TokService,CookiesService,DBService,FiltrosService,GenerarListaService,GenerarObjDetalleService],

  exports: [ProductoComponent,LocalesComponent,DetAComponent, MapaComponent,CodigoQRComponent,ExportComponent,LogInLComponent, LogUpLComponent, BotonLogOutComponent,
    EstablecimientoLComponent, AltaVehiculoComponent,  EstablecimientoActualComponent, TodoComponent,
     AnioComponent, MarcaComponent, ModeloComponent, TipoComponent, ImagenComponent, KilometrosComponent, DatoCargadoComponent, ImgEditorComponent]
})
export class ComponenteModule { }
