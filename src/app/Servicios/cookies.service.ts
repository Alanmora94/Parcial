import { Injectable } from '@angular/core';


import { Establecimiento } from '../Modelos/establecimiento';


//**********************MODELOS */

import {Cadena} from '../Modelos/cadena';




import {ProductoI} from '../Modelos/producto-i';
import {LocalI} from '../Modelos/local-i';





//*******************SERVICIOS */

import	{DBService} from '../Servicios/db.service'
import { Local } from 'protractor/built/driverProviders';


@Injectable({
  providedIn: 'root'
})
export class CookiesService {


  public _listaCadena : Array<Cadena> = []

  public _establecimientoActual : Establecimiento;

  _establecimientoNombre : string ="";





  //public _listaLocal : Array<LocalI> = []

  public _localActual : LocalI;

  //_establecimientoNombre : string ="";






  constructor() {

  }


//*******************************GUARDAR OBJETO CADENA COMO STORAGE */

  GuardarListaCadena(obj: Array<Cadena>){

    this._listaCadena = obj;
  }

  ObtenerCadena(){

    return this._listaCadena;

  }

//************************************************************** */



GetNombreEstablecimiento(){

      return localStorage.getItem("EstablecimientoName");

}


GetEstablecimiento(){

  let aux = this.GetNombreEstablecimiento();

  if(aux != null)
  {
    return aux;

  }else{

    return this._establecimientoNombre;
  }


}



GetObjetcEstablecimiento(){


  this._establecimientoActual = JSON.parse(localStorage.getItem("Establecimiento"));

  return this._establecimientoActual;
}






  GuardarEstablecimiento(obj: Establecimiento){

    this._establecimientoActual = obj;

    localStorage.setItem("EstablecimientoName", JSON.stringify(obj.razon));

    localStorage.setItem("Establecimiento", JSON.stringify(obj));

  }



  BorrarCookies(){

    localStorage.removeItem("EstablecimientoName");
    localStorage.removeItem("Establecimiento");

  }




///*****************************************GENERAR OBJETO DETALLE */




GenerarObjDetalle(obj: Cadena){

  localStorage.setItem("Detalle", JSON.stringify(obj));

}


//*********************************************TRAER OBJETO DETALLE */


ObtenerObjetoDetalle(){

  return JSON.parse(localStorage.getItem("Detalle"));

}



GenerarObjDetallePorId(obj: string){

  localStorage.setItem("Detalle", JSON.stringify(obj));

}


GenerarCookieCadenaPorId(objeto: Array<Cadena>, idCadena: string){




  for (let index = 0; index < objeto.length; index++) {
    const element = objeto[index];


    if (element.id == idCadena) {

      localStorage.setItem("ObjetoElegido", JSON.stringify(element));
      break;

    }


  }


}



ObtenerCadenaElegida(){

  return JSON.parse(localStorage.getItem("ObjetoElegido"));


}













//******************************************************************************************************************************** */



GetObjetcLocal(){

  this._localActual = JSON.parse(localStorage.getItem("local"));

  return this._localActual;


}



GuardarLocal(obj: LocalI){

  this._localActual = obj;

  localStorage.setItem("LocalName", JSON.stringify(obj.nombre));

  localStorage.setItem("local", JSON.stringify(obj));

}






}
