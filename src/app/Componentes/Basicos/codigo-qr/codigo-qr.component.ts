import { Component, OnInit , Input} from '@angular/core';


@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.component.html',
  styleUrls: ['./codigo-qr.component.css']
})
export class CodigoQRComponent implements OnInit {

  //cadena: Cadena;
  //_lista: Array<Cadena>=[];

  _string: string;

  @Input()
  public set Codigo (obj : string){


    this._string = obj;

  }





  constructor() {


  }



  /*ConvertirAString(){

    //let objeto: Cadena = this._lista[0];

    let cadena: string = this.cadena.razon + " - " + this.cadena.direccion + " - " + this.cadena.marca + " - " + this.cadena.modelo + " - " + this.cadena.tipo;

    return cadena;
  }
*/


  ngOnInit(): void {
  }

}
