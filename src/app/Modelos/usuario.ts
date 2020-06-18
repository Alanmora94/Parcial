export class Usuario {

  nombre?: string;
  email?: string;
  password?: string;

  constructor(email?: string, password?: string,nombre?: string){

    this.email=email;
    this.password=password;
    this.nombre=nombre;



  }

}

