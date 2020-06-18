import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Establecimiento} from '../../../Modelos/establecimiento';

import {CookiesService} from '../../../Servicios/cookies.service';

@Component({
  selector: 'app-establecimiento-actual',
  templateUrl: './establecimiento-actual.component.html',
  styleUrls: ['./establecimiento-actual.component.css']
})
export class EstablecimientoActualComponent implements OnInit {

  _establcimiento: string;

  //@Output() Elegido = new EventEmitter<any>();

  _mostrar= false;


  constructor(private cookies: CookiesService) {

    this._establcimiento = this.cookies.GetEstablecimiento()

    ;

    console.log(this._establcimiento);

  }

  ngOnInit(): void {
  }

}
