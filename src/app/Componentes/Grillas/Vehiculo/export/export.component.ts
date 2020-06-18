import { Component, OnInit , Input} from '@angular/core';

import {DBService} from '../../../../Servicios/db.service';

import {ExportI} from '../../../../Modelos/Grilla/export-i'





//******************************************************************** */

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

  _listado:Array<ExportI>;
  displayedColumns: string[] ;

  @Input()
  public set Lista (obj : Array<ExportI>){


    this._listado = obj;

  }


  @Input()
  public set Cabecera (obj : Array<string>){


    this.displayedColumns = obj;

  }





  //displayedColumns: string[] = ['marca','modelo','tipo','razon'];





  constructor() {




   /* this.base.GetCadena().subscribe(datos=>{

        this._listado = datos;



    })*/

  }


  ngOnInit(): void {

    console.log(this._listado);
    console.log(this.displayedColumns);

  }





}

