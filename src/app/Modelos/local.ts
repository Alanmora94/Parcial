export class Local {



  id?: string;
  nombre?: string;
  email?: string;
  telefono?: number;
  localidad?: string;

  constructor(email?: string, nombre?: string,telefono?: number,localidad?: string){

    this.email=email;
    this.nombre=nombre;
    this.telefono=telefono;
    this.localidad=localidad;

  }



}





