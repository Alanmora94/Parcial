import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import {TokService} from '../Servicios/tok.service';



@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {


  constructor(private router : Router, private token: TokService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      let respuesta: boolean;


      try{



        respuesta = this.token.ValidarToken();


     } catch (error) {

       this.router.navigateByUrl("login");
       return false;

     }


     return respuesta;


  }

}
