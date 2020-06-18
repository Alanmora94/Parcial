import { Component, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';

import {FormControl, Validators} from '@angular/forms';



import {Item} from '../../../../../Modelos/Validacion/item';
//***********IMPORTAR VALIDADOR */

import {MyErrorStateMatcher} from '../../../../../Modelos/Validacion/base';

@Component({
  selector: 'app-anio',
  templateUrl: './anio.component.html',
  styleUrls: ['./anio.component.css']
})
export class AnioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
