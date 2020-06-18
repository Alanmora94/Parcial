import { Component, OnInit , Input} from '@angular/core';


//////////***************MODELO */

import {Detalle} from '../../../Modelos/Grilla/detalle';


@Component({
  selector: 'app-det-a',
  templateUrl: './det-a.component.html',
  styleUrls: ['./det-a.component.css']
})
export class DetAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {



  }

_string: string;

_objetoDetalle : Detalle;

_cabecera : Array<string>;


  @Input()
  public set Detalle (obj : Detalle){


    this._objetoDetalle = obj;

  }



  @Input()
  public set Cabecera (obj : Array<string>){


    this._cabecera = obj;

  }


  EnviarQR(){


    this._string = JSON.stringify(this._objetoDetalle);


    return this._string;


  }




}
