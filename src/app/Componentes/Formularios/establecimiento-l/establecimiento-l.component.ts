import { Component, OnInit } from '@angular/core';
import { Establecimiento } from '../../../Modelos/establecimiento'


//import {SesionService} from '../../../Servicios/sesion.service';

import {DBService} from '../../../Servicios/db.service';


import { FormControl, FormBuilder ,FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-establecimiento-l',
  templateUrl: './establecimiento-l.component.html',
  styleUrls: ['./establecimiento-l.component.css']
})
export class EstablecimientoLComponent implements OnInit {

  _establecimiento :Establecimiento;

  formulario: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  public contactForm: FormGroup;

  _razon:string;
  _email:string;
  _pass:string;
  _direccion:string;
  _telefono:number;



  constructor(private base : DBService ,private frmbuilder: FormBuilder) {

    this.formulario = this.frmbuilder.group( {

      telefono: ['', [Validators.required, Validators.minLength(8)]],
      razon: ['', [Validators.required, ]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      direccion: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]});

   }


   get pass() { return this.formulario.get('pass'); }
   get telefono() { return this.formulario.get('telefono'); }
   get direccion() { return this.formulario.get('direccion'); }
   get razon() { return this.formulario.get('razon'); }
   get email() { return this.formulario.get('email'); }


   Registrar(){



    if(this.formulario.valid){



      this._establecimiento = new Establecimiento(this._email,this._pass,this._razon,this._telefono,this._direccion);


     this.base.AltaEstablecimiento(this._establecimiento);

     this.Limpiar();
    }


  }



  ngOnInit(): void {


  }


  cargarDatos(){

    this._razon = "consecionaria1";
    this._email = "consecionaria1@yahoo.com";
    this._pass = "Umbrella12";
    this._direccion = "La rioja 1231";
    this._telefono = 1644332634;

  }


Limpiar(){

  this._razon = "";
  this._email = "";
  this._pass = "";
  this._direccion = "";
  this._telefono = null;

  //this.formulario.clearValidators();
  //this.formulario.clearAsyncValidators();

}






prueba(){

  this.base.TraerUnEstablecimiento();
}

}
