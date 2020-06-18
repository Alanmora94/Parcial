import { Component, OnInit } from '@angular/core';

//****************MODULOS */
import { Detalle } from '../../Modelos/Grilla/detalle';

import {Cadena} from '../../Modelos/cadena';


//************SERVICIOS */


import {GenerarObjDetalleService} from '../../Servicios/Detalle/generar-obj-detalle.service';

import {CookiesService} from '../../Servicios/cookies.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {


  _objetoDetalle: Cadena;
  _DetalleListo: Detalle;

  /// indicar campos de mayor importancia a menor (menos la imagen)

  _cabecera: Array<string> = ['marca','modelo','Año','tipo','kilometros']

  constructor(private cookies: CookiesService, private detalle: GenerarObjDetalleService) {

    this._objetoDetalle = this.cookies.ObtenerCadenaElegida();

    this._DetalleListo = this.detalle.GenerarObjDetalleConImg(this._objetoDetalle,'imagen','marca','modelo','Anio','tipo','kilometro')



   }

  ngOnInit(): void {
  }

}
