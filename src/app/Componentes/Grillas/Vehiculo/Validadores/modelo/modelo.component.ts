import { Component, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';

import {FormControl, Validators} from '@angular/forms';



import {Item} from '../../../../../Modelos/Validacion/item';
//***********IMPORTAR VALIDADOR */

import {MyErrorStateMatcher} from '../../../../../Modelos/Validacion/base';




@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.css']
})
export class ModeloComponent extends DefaultEditor implements OnInit {


  _viejoValor : string;
  modelo: FormControl;

  constructor() { super();

  }

  ngOnInit() {


    if (typeof this.cell.getValue() === 'string')

    {
      this._viejoValor = this.cell.getValue();

    }else{

      this._viejoValor = "CARGANDO..."
    }

    console.log(this._viejoValor);


    this.modelo = new FormControl(this._viejoValor, [
      Validators.required,
      Validators.minLength(3),

    ]);

    this.generarItem();


  }



  matcher = new MyErrorStateMatcher();


  escribiendo(){

    //console.log("dato viejo " + this.cell.getValue() );


this.generarItem();

  }




  generarItem(){

    let item :Item = {
      valido: this.modelo.valid,
      valor: this.modelo.value
    }

    this.cell.newValue = item;


  }



}
