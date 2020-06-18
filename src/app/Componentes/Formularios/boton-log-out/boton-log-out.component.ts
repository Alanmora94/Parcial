import { Component, OnInit } from '@angular/core';
import {SesionService} from '../../../Servicios/sesion.service';


@Component({
  selector: 'app-boton-log-out',
  templateUrl: './boton-log-out.component.html',
  styleUrls: ['./boton-log-out.component.css']
})
export class BotonLogOutComponent implements OnInit {

  constructor(private sesion: SesionService) { }

  ngOnInit(): void {
  }


  exit(){

    this.sesion.LogOut();
  }


}
