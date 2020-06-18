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

import {Cadena} from '../../../../Modelos/cadena'


//*****************SERVICIOS */

import {CookiesService} from '../../../../Servicios/cookies.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  //_pacienteEditado : Paciente;

  _cadena: Array<Cadena>;

  //result;




  @Input()
  public set Paciente (obj : Array<Cadena>){

    this._cadena = obj;

    this.cookies.GuardarListaCadena(this._cadena);


  }


  @Output() deleteOne = new EventEmitter<any>();

  @Output() PacienteEditado = new EventEmitter<any>();


  constructor(private base: DBService, public cookies: CookiesService) {


    this.base.GetCadena().subscribe(datos =>{
      this._cadena = datos;

    });

  }

  ngOnInit(): void {
  }






  deleteone(e){


  }


  Edicion(e){

  }





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
      modelo: {
        title: 'modelo',
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
        renderComponent: TipoComponent
      }
      ,
      imagen: {
        title: 'Imagen',
        filter: false,
        sort: false,
        editor: {
          type: 'custom',
          component: ImgEditorComponent
        },
        type: 'custom',
        renderComponent: ImagenComponent
      },
      id: {
        title: 'Detalle',
        type: 'custom',
        filter: false,
        //update: false,
        renderComponent: BotonDetalleComponent
      }
    }
  };







}
