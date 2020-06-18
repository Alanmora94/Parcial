import { Component, OnInit } from '@angular/core';

import {Vehiculo} from '../../../Modelos/vehiculo';



//import {SesionService} from '../../../Servicios/sesion.service';

import {DBService} from '../../../Servicios/db.service';


import { FormControl, FormBuilder ,FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-alta-vehiculo',
  templateUrl: './alta-vehiculo.component.html',
  styleUrls: ['./alta-vehiculo.component.css']
})
export class AltaVehiculoComponent implements OnInit {

  _vehiculo :Vehiculo;

  formulario: FormGroup;

  public contactForm: FormGroup;

  _modelo:string;
  _marca:string;
  _kilometro:number;
  _anio:number;
  preimagen;
  _tipo:string;



  constructor(private base : DBService ,private frmbuilder: FormBuilder) {

    this.formulario = this.frmbuilder.group( {

      anio: ['', [Validators.required, Validators.minLength(4)]],
      tipo: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      marca: ['', [Validators.required, Validators.minLength(2)]],
      modelo: ['', [Validators.required, Validators.minLength(2)]],
      kilometro: ['', [Validators.required, Validators.minLength(4)]]});

   }

   get imagen() { return this.formulario.get('imagen'); }
   get tipo() { return this.formulario.get('tipo'); }
   get modelo() { return this.formulario.get('modelo'); }
   get anio() { return this.formulario.get('anio'); }
   get marca() { return this.formulario.get('marca'); }
   get kilometro() { return this.formulario.get('kilometro'); }

   Registrar(){



    if(this.formulario.valid){



      this._vehiculo = new Vehiculo();
      this._vehiculo.anio = this._anio;
      this._vehiculo.imagen = this.preimagen;
      this._vehiculo.kilometro = this._kilometro;
      this._vehiculo.marca = this._marca;
      this._vehiculo.modelo = this._modelo;
      this._vehiculo.tipo = this._tipo;


     this.base.AltaVehiculo(this._vehiculo);



     this.Limpiar();
    }

    this.formulario.reset();
    this.marca.reset();

  }



  ngOnInit(): void {


  }


  cargarDatos(){

    this._anio = 2000;
    this._kilometro = 125443;
    this._marca = "WV";
    this._modelo = "GOLF";
    //this._tipo = "Camion";


  }


  Limpiar(){

    this._anio = null;
    this._kilometro = null;
    this._marca = null;
    this._modelo = null;
  }




handleImage(e: any):void{

  this.preimagen = e.target.files[0];


}



}
