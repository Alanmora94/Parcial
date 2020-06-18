import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../Modelos/usuario';
//import { LoginService } from '../../../servicios/sesion/login.service';
import {SesionService} from '../../../Servicios/sesion.service';

import { FormControl, FormBuilder ,FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-log-up-l',
  templateUrl: './log-up-l.component.html',
  styleUrls: ['./log-up-l.component.css']
})
export class LogUpLComponent implements OnInit {

  _usuarios :Usuario;

  formulario: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  public contactForm: FormGroup;

  _nombre:string;
  _email:string;
  _pass:string;

  constructor(private sesion: SesionService, private frmbuilder: FormBuilder) {

    this.formulario = this.frmbuilder.group( {

      pass: ['', [Validators.required, Validators.minLength(6)]],
      nombre: ['', [Validators.required, Validators.minLength(4)]],
     email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]});

   }


   get pass() { return this.formulario.get('pass'); }
   get name() { return this.formulario.get('nombre'); }
   get email() { return this.formulario.get('email'); }


   Registrar(){



    if(this.formulario.valid){

       this._usuarios = new Usuario(this._email,this._pass,this._nombre);


      this.sesion.CargarUser(new Usuario(this._email,this._pass,this._nombre));
    }


  }



  ngOnInit(): void {


  }



}
