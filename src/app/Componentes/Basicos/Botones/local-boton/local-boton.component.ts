import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


import {LocalI} from '../../../../Modelos/local-i';

import {CookiesService} from '../../../../Servicios/cookies.service';




@Component({
  selector: 'app-local-boton',
  templateUrl: './local-boton.component.html',
  styleUrls: ['./local-boton.component.css']
})
export class LocalBotonComponent implements OnInit {

  _lista: Array<LocalI>;
  _elegido: string;

  //Output() Elegido = new EventEmitter<any>();
  @Input()
  public set Lista (obj : Array<LocalI>){


    this._lista = obj;

  }


  constructor(private cookies: CookiesService) {



  }

  ngOnInit(): void {
  }


  boton(e){

    console.log("entra en el boton");

    //this.Elegido.emit(e);

    this.cookies.GuardarLocal(e)

  }



}
