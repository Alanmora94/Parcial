import { Component, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';

import {FormControl, Validators} from '@angular/forms';



import {Item} from '../../../../../Modelos/Validacion/item';
//***********IMPORTAR VALIDADOR */

import {MyErrorStateMatcher} from '../../../../../Modelos/Validacion/base';

@Component({
  selector: 'app-kilometros',
  templateUrl: './kilometros.component.html',
  styleUrls: ['./kilometros.component.css']
})
export class KilometrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
