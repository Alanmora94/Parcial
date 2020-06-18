import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



//**********************SERVICIOS */


import {DBService} from '../../../../Servicios/db.service';

//*************************COMPONENTES */


import {ImagenComponent} from '../Validadores/imagen/imagen.component';
import {ImgEditorComponent} from '../Validadores/img-editor/img-editor.component';

import {TipoComponent} from '../../tipo/tipo.component'

import {DatoCargadoComponent} from '../../dato-cargado/dato-cargado.component'

import {ModeloComponent} from '../Validadores/modelo/modelo.component'
import {MarcaComponent} from '../Validadores/marca/marca.component'


import {BotonDetalleComponent} from '../Validadores/boton-detalle/boton-detalle.component';

//*******************CLASE */

import {ProductoI} from '../../../../Modelos/producto-i'


//*****************SERVICIOS */

import {CookiesService} from '../../../../Servicios/cookies.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  //_pacienteEditado : Paciente;

  _cadena: Array<ProductoI>;

  //result;




  @Input()
  public set Paciente (obj : Array<ProductoI>){

    this._cadena = obj;

    this.cookies.GuardarListaCadena(this._cadena);


  }


  @Output() deleteOne = new EventEmitter<any>();

  @Output() PacienteEditado = new EventEmitter<any>();


  constructor(private base: DBService, public cookies: CookiesService) {


    this.base.GetProducto().subscribe(datos =>{
      this._cadena = datos;

    });

  }

  ngOnInit(): void {
  }






  deleteone(e){


  }


  Edicion(e){

  }


/*

  id?: string;
  nombre?: string;
  marca?: string;
  stock?: number;
  precio?: number;
  tipo?: string;

  idLocal?: string;
  nombreLocal?: string;
  emailLocal?: string;
  telefonoLocal?: number;
  localidadLocal?: string;

*/


  settings = {

    delete: {
      confirmDelete : true
    },
    edit: {
      confirmSave: true

    },

    actions: {
      add: false,
      edit: true
    },
    columns: {

      marca: {
        title: 'marca',
        filter: true,
        editor: {
          type: 'custom',
          component: MarcaComponent
        },
        type: 'custom',
        renderComponent: DatoCargadoComponent

      },
      nombre: {
        title: 'nombre',
        editor: {
          type: 'custom',
          component: ModeloComponent
        },
        type: 'custom',
        renderComponent: DatoCargadoComponent
      },
      tipo: {
        title: 'tipo',
        type: 'custom',
        update: false,
        renderComponent: DatoCargadoComponent
      }
      ,

      stock: {
        title: 'stock',
        type: 'custom',
        update: false,
        renderComponent: DatoCargadoComponent
      },

      precio: {
        title: 'Precio',
        type: 'custom',
        update: false,
        renderComponent: DatoCargadoComponent
      },

      nombreLocal: {
        title: 'Local',
        type: 'custom',
        update: false,
        renderComponent: DatoCargadoComponent
      },

      emailLocal: {
        title: 'Mail',
        type: 'custom',
        update: false,
        renderComponent: DatoCargadoComponent
      },
      telefonoLocal: {
        title: 'Telefono',
        type: 'custom',
        filter: false,
        //update: false,
        renderComponent: DatoCargadoComponent
      },
      localidadLocal: {
        title: 'Localidad',
        type: 'custom',
        filter: false,
        //update: false,
        renderComponent: DatoCargadoComponent
      }
    }
  };







}
