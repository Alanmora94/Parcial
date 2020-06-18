import { Component, OnInit , Input} from '@angular/core';
import { Router } from "@angular/router";

//**************SERVICIOS */

import {DBService} from '../../../../../Servicios/db.service';

import {CookiesService} from '../../../../../Servicios/cookies.service';

//import {CookiesService} from '../../../../../Servicios/cookies.service';

//**************MODELOS */

import {Cadena} from '../../../../../Modelos/cadena';


@Component({
  selector: 'app-boton-detalle',
  templateUrl: './boton-detalle.component.html',
  styleUrls: ['./boton-detalle.component.css']
})
export class BotonDetalleComponent implements OnInit {

  @Input() value: string;

  _lista: Array<Cadena>;


  constructor(public cookies:CookiesService, private base: DBService, private ruta: Router) {


  }

  ngOnInit(): void {
  }

  Detalle(){

    console.log(this.value);

    this.base.GetCadena().subscribe(data=>{

      this._lista =data;
      this.cookies.GenerarCookieCadenaPorId(this._lista, this.value);
      this.ruta.navigateByUrl('/Detalle');



    })

    //this._lista = this.cookies.ObtenerCadena();

    console.log(this._lista);
  //  this.detalle.GenerarCookieCadenaPorId(this._lista,this.value);

  }


}
