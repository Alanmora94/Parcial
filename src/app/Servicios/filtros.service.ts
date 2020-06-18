import { Injectable } from '@angular/core';

//*****************MODELOS */
import { IEstablecimiento } from '../Modelos/iestablecimiento';
import { Establecimiento } from '../Modelos/establecimiento';

//*********************CADENA */
import {Cadena} from '../Modelos/cadena'


//******************SERVICIOS */





@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

  constructor() { }

  _listaFiltrada: Array<Cadena> = [];



  FiltrarLista(lista: Array<Cadena>, id: Establecimiento ){


    //let _lista: Array<Cadena>;


    for (let index = 0; index < lista.length; index++) {
      const element = lista[index];

      if (element.idEstablecimiento == id.id) {

        this._listaFiltrada.push(element);
      }

    }

    return this._listaFiltrada;

  }






}
