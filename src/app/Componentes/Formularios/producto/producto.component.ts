import { Component, OnInit } from '@angular/core';

import {Producto} from '../../../Modelos/producto';

import {LocalI} from '../../../Modelos/local-i';


//import {SesionService} from '../../../Servicios/sesion.service';

import {DBService} from '../../../Servicios/db.service';


import { FormControl, FormBuilder ,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-productoF',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  _Locales: Array<LocalI>;
  _producto :Producto;

  formulario: FormGroup;

  public contactForm: FormGroup;

  _nombre:string;
  _marca:string;
  _stock:number;
  _precio:number;
  _tipo:string;



  constructor(private base : DBService ,private frmbuilder: FormBuilder) {

    this.formulario = this.frmbuilder.group( {

      stock: ['', [Validators.required, Validators.minLength(1)]],
      tipo: ['', [Validators.required]],
      marca: ['', [Validators.required, Validators.minLength(2)]],
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      precio: ['', [Validators.required, Validators.minLength(1)]]});


      this.base.GetLocal().subscribe(data=>{

        this._Locales = data;

      })


   }

   get tipo() { return this.formulario.get('tipo'); }
   get nombre() { return this.formulario.get('modelo'); }
   get stock() { return this.formulario.get('stock'); }
   get marca() { return this.formulario.get('marca'); }
   get precio() { return this.formulario.get('precio'); }

   Registrar(){



    if(this.formulario.valid){



      this._producto = new Producto();
      this._producto.nombre = this._nombre;
      this._producto.marca = this._marca;
      this._producto.stock = this._stock;
      this._producto.precio = this._precio;
      this._producto.tipo = this._tipo;


     this.base.AltaProducto(this._producto);



     //this.Limpiar();
    }

    //this.formulario.reset();
    //this.marca.reset();

  }



  ngOnInit(): void {


  }


  cargarDatos(){

    this._precio = 23;
    this._stock = 3;
    this._marca = "leys";
    this._nombre = "papas";
    //this._tipo = "Camion";


  }


  /*Limpiar(){

    this._anio = null;
    this._kilometro = null;
    this._marca = null;
    this._modelo = null;
  }




handleImage(e: any):void{

  this.preimagen = e.target.files[0];


}*/





}
