import { Component, OnInit } from '@angular/core';


//********************MODELOS */

import {Cadena} from '../../Modelos/cadena';
import {Establecimiento} from '../../Modelos/establecimiento';

import {ExportI} from '../../Modelos/Grilla/export-i'



//************************************************** */


import {ProductoI} from '../../Modelos/producto-i';

import {Local} from '../../Modelos/local';



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

_lista:Array<ProductoI>;

_local: Local;
_listaFiltrada:Array<ProductoI>;
_cabeceras: string[] = ['nombre','marca','stock','tipo','precio','Local','Email','Telefono','Localidad'];
_listaFinal: Array<ExportI>;

/*
  id?: string;
  nombre?: string;
  marca?: string;
  stock?: number;
  precio?: number;
  tipo?: string;

  idLocal?: string;
  nombreLocal?: string;
  emailLocal?: string;
  telefonoLocal?: number;
  localidadLocal?: string;

*/



constructor(private base: DBService, private cookies: CookiesService, private filtro: FiltrosService, private datoExport: GenerarListaService) {

        this.base.GetProducto().subscribe(datos=>{

        this._lista = datos;

       // console.log(this._lista);

        //this._local = this.cookies.GetObjetcLocal();

       // console.log(this._establecimiento);

        //this._listaFiltrada = this.filtro.FiltrarLista(this._lista,this._establecimiento);
        this._listaFiltrada = this._lista;
      //  console.log(this._listaFiltrada);

        this._listaFinal = this.datoExport.GenerarListaExpor(this._listaFiltrada,'nombre','marca','stock','tipo','precio','nombreLocal','emailLocal','telefonoLocal','localidadLocal')

        console.log(this._listaFinal);
    })


  }

  ngOnInit(): void {
  }

}
