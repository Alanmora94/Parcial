import { Component, OnInit } from '@angular/core';


import { Router } from "@angular/router";

import { Local } from '../../../Modelos/local';


//import {SesionService} from '../../../Servicios/sesion.service';

import {DBService} from '../../../Servicios/db.service';


import { FormControl, FormBuilder ,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.css']
})
export class LocalesComponent implements OnInit {

  _local :Local;

  formulario: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  public contactForm: FormGroup;

  _nombre:string;
  _email:string;
  _localidad:string;
  _telefono:number;



  constructor(private base : DBService ,private frmbuilder: FormBuilder, private ruta: Router) {

    this.formulario = this.frmbuilder.group( {

      telefono: ['', [Validators.required, Validators.minLength(8)]],
      nombre: ['', [Validators.required, ]],
      localidad: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]});

   }


   get telefono() { return this.formulario.get('telefono'); }
   get localidad() { return this.formulario.get('localidad'); }
   get nombre() { return this.formulario.get('nombre'); }
   get email() { return this.formulario.get('email'); }


   Registrar(){



    if(this.formulario.valid){



      this._local = new Local();

      this._local.localidad = this._localidad;
      this._local.email = this._email;
      this._local.nombre = this._nombre;
      this._local.telefono = this._telefono;


     this.base.AltaLocal(this._local);
     this.ruta.navigateByUrl("/Local");


     //this.Limpiar();


    }


  }



  ngOnInit(): void {


  }


  cargarDatos(){

    this._nombre= "Local1";
    this._email = "consecionaria1@yahoo.com";
    this._localidad = "Banfield";
    this._telefono = 1644332634;

  }

/*
Limpiar(){

  this._razon = "";
  this._email = "";
  this._pass = "";
  this._direccion = "";
  this._telefono = null;

  //this.formulario.clearValidators();
  //this.formulario.clearAsyncValidators();

}*/






/*prueba(){

  this.base.TraerUnEstablecimiento();
}*/

}
