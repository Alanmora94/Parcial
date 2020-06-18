import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


import {Establecimiento} from '../../../../Modelos/establecimiento';

@Component({
  selector: 'app-establecimientos-button',
  templateUrl: './establecimientos-button.component.html',
  styleUrls: ['./establecimientos-button.component.css']
})
export class EstablecimientosButtonComponent implements OnInit {

  _lista: Array<Establecimiento>;
  _elegido: string;

  @Output() Elegido = new EventEmitter<any>();
  @Input()
  public set Lista (obj : Array<Establecimiento>){


    this._lista = obj;

  }


  constructor() { }

  ngOnInit(): void {
  }


  boton(e){

    console.log("entra en el boton");

    this.Elegido.emit(e);

  }



}
