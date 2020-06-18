import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";

//***************MODELOS */

import { Usuario } from '../Modelos/usuario';
import { Establecimiento } from '../Modelos/establecimiento';

//********************SERVICIOS */

import {CookiesService} from '../Servicios/cookies.service';
import {DBService} from '../Servicios/db.service';
import {TokService} from './tok.service'




@Injectable({
  providedIn: 'root'
})
export class SesionService {


  paquete: JSON;
  UserName: string ="";
  sesion: boolean=false;


  constructor(

    private base: DBService,
    private cookies: CookiesService,
    public auth: AngularFireAuth,
    private token: TokService,
    private ruta: Router)
     { }


  objeto: any;


/************************************** NUEVO USUARIO ********************************* */

  CargarUser(obj: Usuario){

  //  console.log("entra");
  //  console.log(obj.email);
  //  console.log(obj.password);

    this.auth.createUserWithEmailAndPassword(obj.email,obj.password)
    .then(data => {


      data.user.updateProfile({
        displayName: obj.nombre
      }).then(() => {
        data.user.getIdToken().then(token=>{
          this.UserName = obj.nombre;
          this.GuardaruserName(this.UserName);


          this.token.GuardarToken(token);
          this.sesion = true;
          //this.notificacion.LogUp(this.UserName);
          this.ruta.navigateByUrl("Home");
        }
        )
        .catch(e=>{

        });

      }).catch(e=>{


      });



    })
    .catch(e =>{
    })

  }

/********************************************************************************************************* */


/************************************** INICIAR SESION ********************************* */

  IniciarSesion(obj: Usuario){


  try {


    this.auth.signInWithEmailAndPassword(obj.email,obj.password)
    .then(data => {

          this.UserName = data.user.displayName;
          this.GuardaruserName(this.UserName);
          //this.cookies.GuardarEstablecimiento(establecimiento);

      data.user.getIdToken().then(token=>{
          this.token.GuardarToken(token);

          if(this.token.ValidarToken()){

            this.sesion = true;
            this.ruta.navigateByUrl("Home");}
        }).catch(e=>{

                 });

        }).catch(e=>{
                       console.log("error de login");

                 });

    } catch (error) {

      console.log("error de login2");
    }



}






GuardaruserName(obj: string){
  localStorage.setItem("UserName", obj);
}



LogOut(){

  try {

    localStorage.removeItem("UserName")

    this.UserName = '';

    this.token.BorrarToken();

    this.sesion = false;

    this.ruta.navigateByUrl("LogIn");


  } catch (error) {


  }

}
















}
