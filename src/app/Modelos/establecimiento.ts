export class Establecimiento {

  id?: string;
  razon?: string;
  email?: string;
  telefono?: number;
  direccion?: string;
  password?: string;

  constructor(email?: string, password?: string,razon?: string,telefono?: number,direccion?: string){

    this.email=email;
    this.password=password;
    this.razon=razon;
    this.telefono=telefono;
    this.direccion=direccion;

  }

}

