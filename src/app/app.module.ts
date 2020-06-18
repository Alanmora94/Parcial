import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModule } from './Pages/page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponenteModule } from './Componentes/componente.module';

//**************FIREBASE */

import { AngularFireModule } from '@angular/fire';

import { environment } from '../environments/environment';



import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';



//**************JWT */
import { JwtModule } from "@auth0/angular-jwt";
import { HttpClientModule } from "@angular/common/http";
//import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AgmCoreModule } from '@agm/core';



//import {LoginService} from './Servicios/sesion/login.service';
//import {TokenService} from './Servicios/sesion/token.service';


import {SesionService} from './Servicios/sesion.service';
import {TokService} from './Servicios/tok.service';
import {CookiesService} from './Servicios/cookies.service';
import {DBService} from './Servicios/db.service';
import {FiltrosService} from './Servicios/filtros.service'
import {GenerarListaService} from './Servicios/GrillaExport/generar-lista.service';
import {GenerarObjDetalleService} from './Servicios/Detalle/generar-obj-detalle.service';
//import { ConvertirAImagenPipe } from './Pipes/convertir-aimagen.pipe';



export function tokenGetter() {
  return localStorage.getItem("token");
}


@NgModule({
  declarations: [

    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
        }
    }),

    ComponenteModule,
    PageModule,
    BrowserAnimationsModule,


    AppRoutingModule,


    //MatGoogleMapsAutocompleteModule,


    AgmCoreModule.forRoot(),


  ],
  providers: [SesionService,TokService,SesionService,TokService,CookiesService,DBService,FiltrosService,GenerarListaService,GenerarObjDetalleService],//LoginService,TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
