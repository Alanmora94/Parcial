import { Injectable } from '@angular/core';

import { ExportI } from '../../Modelos/Grilla/export-i';
import { Cadena } from '../../Modelos/cadena';


@Injectable({
  providedIn: 'root'
})
export class GenerarListaService {

  constructor() { }

  _listaExport: Array<ExportI> = [];


  GenerarListaExpor(lista: Array<Cadena>, f1: string,f2?: string,f3?: string,f4?: string,f5?: string,f6?: string,f7?: string,f8?: string,f9?: string,f10?: string,f11?: string,f12?: string){


    for (let index = 0; index < lista.length; index++) {
      const element = lista[index];


      let itemEx :ExportI = {

        i1: element[f1]
      }

        if (f2 != null) {

          itemEx.i2=element[f2];
        }

        if (f3 != null) {

          itemEx.i3=element[f3];
        }
        if (f4 != null) {

          itemEx.i4=element[f4];
        }
        if (f5 != null) {

          itemEx.i5=element[f5];
        }
        if (f6 != null) {

          itemEx.i6=element[f6];
        }

        if (f7 != null) {

          itemEx.i7=element[f7];
        }

        if (f8 != null) {

          itemEx.i8=element[f8];
        }

        if (f9 != null) {

          itemEx.i9=element[f9];
        }

        if (f10 != null) {

          itemEx.i10=element[f10];
        }

        if (f11 != null) {

          itemEx.i11=element[f11];
        }

        if (f12 != null) {

          itemEx.i12=element[f12];
        }

      console.log(itemEx);


        this._listaExport.push(itemEx);

      }

      return this._listaExport;


    }



  }




