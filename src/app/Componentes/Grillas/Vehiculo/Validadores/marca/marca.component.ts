import { Component, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';

import {FormControl, Validators} from '@angular/forms';



import {Item} from '../../../../../Modelos/Validacion/item';
//***********IMPORTAR VALIDADOR */

import {MyErrorStateMatcher} from '../../../../../Modelos/Validacion/base';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent extends DefaultEditor implements OnInit {


  _viejoValor : string;
  marca: FormControl;

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


    this.marca = new FormControl(this._viejoValor, [
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
      valido: this.marca.valid,
      valor: this.marca.value
    }

    this.cell.newValue = item;


  }



}
