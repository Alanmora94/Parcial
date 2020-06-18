import { Component, OnInit } from '@angular/core';


//********************MODELOS */

import {Cadena} from '../../Modelos/cadena';
import {Establecimiento} from '../../Modelos/establecimiento';

import {ExportI} from '../../Modelos/Grilla/export-i'

//***********************SERVICIOS */

import {FiltrosService} from '../../Servicios/filtros.service';
import {CookiesService} from '../../Servicios/cookies.service';
import { DBService } from '../../Servicios/db.service';
import {GenerarListaService} from '../../Servicios/GrillaExport/generar-lista.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

_lista:Array<Cadena>;
_establecimiento: Establecimiento;
_listaFiltrada:Array<Cadena>;
_cabeceras: string[] = ['marca','modelo','tipo','razon'];
_listaFinal: Array<ExportI>;

constructor(private base: DBService, private cookies: CookiesService, private filtro: FiltrosService, private datoExport: GenerarListaService) {

        this.base.GetCadena().subscribe(datos=>{

        this._lista = datos;

       // console.log(this._lista);

        this._establecimiento = this.cookies.GetObjetcEstablecimiento();

       // console.log(this._establecimiento);

        this._listaFiltrada = this.filtro.FiltrarLista(this._lista,this._establecimiento);

      //  console.log(this._listaFiltrada);

        this._listaFinal = this.datoExport.GenerarListaExpor(this._listaFiltrada,'marca','modelo','tipo','razon')

        console.log(this._listaFinal);
    })


  }

  ngOnInit(): void {
  }

}
