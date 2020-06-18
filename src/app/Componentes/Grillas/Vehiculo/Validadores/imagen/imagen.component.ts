import { Component, OnInit , Input} from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';

import {FormControl, Validators} from '@angular/forms';



import {Item} from '../../../../../Modelos/Validacion/item';
//***********IMPORTAR VALIDADOR */

import {MyErrorStateMatcher} from '../../../../../Modelos/Validacion/base';



@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {


  _precarga = true;

  @Input() value: string;



  constructor() { }

  ngOnInit(): void {

    //console.log("VALOR CARGANDO: " + this.value)

    if (typeof this.value === 'string')

    {
      this.Cancelarprecarga();

    }


  }


  Cancelarprecarga(){

    this._precarga = false;
  }



}



