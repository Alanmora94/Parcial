import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';


import { IEstablecimiento } from '../Modelos/iestablecimiento';
import { Establecimiento } from '../Modelos/establecimiento';

//**********************VEHICULOS */
import { Ivehiculo } from '../Modelos/ivehiculo';
import { Vehiculo } from '../Modelos/vehiculo';



//*********************CADENA */
import {Cadena} from '../Modelos/cadena'


import {CookiesService} from '../Servicios/cookies.service'


import {Ifile} from '../Modelos/ifile';
import { Observable, from } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { EstablecimientoComponent } from '../Pages/establecimiento/establecimiento.component';




@Injectable({
  providedIn: 'root'
})
export class DBService {


//////////////// ESTABLECIMIENTO

  EstablecimientoCollection: AngularFirestoreCollection<IEstablecimiento>;
  Establecimiento: Observable<IEstablecimiento[]>;
  EstablecimientoDoc: AngularFirestoreDocument<IEstablecimiento>;


//////////////// AUTOS

  AutoCollection: AngularFirestoreCollection<Ivehiculo>;
  Auto: Observable<Ivehiculo[]>;
  AutoDoc: AngularFirestoreDocument<Ivehiculo>;


  //////////////// CADENA

  CadenaCollection: AngularFirestoreCollection<Cadena>;
  Cadena: Observable<Cadena[]>;
  CadenaDoc: AngularFirestoreDocument<Cadena>;


  //******************VARIABLE PARA SUBIR IMAGEN */

  private filepath: any;
  private downloadURL: Observable<string>

  establecimientoString = '/preparcial/ZOwvS0XEdJNOrkM3KDcC/concesionaria';
  vehiculosString = '/preparcial/ZOwvS0XEdJNOrkM3KDcC/autos';
  cadenaString = '/preparcial/ZOwvS0XEdJNOrkM3KDcC/cadena';





  constructor(private db: AngularFirestore, private storage: AngularFireStorage, private cookies: CookiesService) {

    this.EstablecimientoCollection = this.db.collection(this.establecimientoString);
    this.AutoCollection = this.db.collection(this.vehiculosString);
    this.CadenaCollection = this.db.collection(this.cadenaString);

  }









//************************************************ESTABLECIMIENTO             */


GetEstablecimientos(){

  this.Establecimiento = this.EstablecimientoCollection.snapshotChanges().pipe(map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as IEstablecimiento;
      data.id = a.payload.doc.id;
       return data;
    });
  }));


  return this.Establecimiento;

}


TraerUnEstablecimiento(){


  /*
  let id = 'NtQBdKTQGxAorMgvRl7h';

this.EstablecimientoDoc = this.db.doc(this.establecimientoString + '/' + id);

console.log(this.EstablecimientoDoc.ref);
*/


}







AltaEstablecimiento(obj: Establecimiento){




        let auxi :IEstablecimiento = {
          razon: obj.razon,
          direccion: obj.direccion,
          email: obj.email,
          telefono: obj.telefono,
          password: obj.password
        }

        this.EstablecimientoCollection.add(auxi);

}











//*************************************************AUTOS */


GetAutos(){

  this.Auto = this.AutoCollection.snapshotChanges().pipe(map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as Ivehiculo;
      data.id = a.payload.doc.id;
       return data;
    });
  }));


  return this.Auto;

}






AltaVehiculo(obj: Vehiculo){

  this.filepath =  `images/${obj.imagen.name}`;
  const fileRef = this.storage.ref(this.filepath);
  const task = this.storage.upload(this.filepath, obj.imagen);
  task.snapshotChanges()
  .pipe(
    finalize(() => {
      fileRef.getDownloadURL().subscribe(urlImage => {
        this.downloadURL = urlImage;
        //console.log("URL:" + urlImage);
        //this.savePost(post);

        const auxi :Ivehiculo = {
          marca: obj.marca,
          modelo: obj.modelo,
          anio: obj.anio,
          kilometro: obj.kilometro,
          tipo: obj.tipo,
          imagen: this.downloadURL
        }

        //this.AutoCollection.add(auxi);
        this.AltaCadena(auxi);



      });
    })
  ).subscribe();


}






///////////////////////////////****CADENA */




GetCadena(){

  this.Cadena = this.CadenaCollection.snapshotChanges().pipe(map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as Cadena;
      data.id = a.payload.doc.id;
       return data;
    });
  }));


  return this.Cadena;

}










AltaCadena(obj: Ivehiculo){


  let pad = this.cookies.GetObjetcEstablecimiento();


  console.log(pad);

  let auxi :Cadena = {

    idEstablecimiento: pad.id,
    razon: pad.razon,
    direccion: pad.direccion,
    email: pad.email,
    telefono: pad.telefono,
    marca: obj.marca,
    modelo: obj.modelo,
    anio: obj.anio,
    kilometro: obj.kilometro,
    tipo: obj.tipo,
    imagen: this.downloadURL



  }

  this.CadenaCollection.add(auxi);


}














}
