import { Injectable } from '@angular/core';


///*****************MODELOS */

import { Detalle } from '../../Modelos/Grilla/detalle';
import { Cadena } from '../../Modelos/cadena';


//****************SERVICIOS */



@Injectable({
  providedIn: 'root'
})
export class GenerarObjDetalleService {


_lista : Array<Cadena>;

  constructor() { }



  GenerarObjDetalleConImg(objeto: Cadena, im1: string,f1?: string,f2?: string,f3?: string,f4?: string,f5?: string){


    let obj : Detalle = {

      img: objeto[im1] }



      if (f1 != null) {

        obj.i1=objeto[f1];
      }

      if (f2 != null) {

        obj.i2=objeto[f2];
      }

      if (f3 != null) {

        obj.i3=objeto[f3];
      }

      if (f4 != null) {

        obj.i4=objeto[f4];
      }

      if (f5 != null) {

        obj.i5=objeto[f5];
      }

      return obj;


  }







}
