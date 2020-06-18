export class Producto {



  id?: string;
  nombre?: string;
  marca?: string;
  stock?: number;
  precio?: number;
  tipo?: string;

  idLocal?: string;
  nombreLocal?: string;
  emailLocal?: string;
  telefonoLocal?: number;
  localidadLocal?: string;


constructor(marca?: string,nombre?: string,stock?: number,precio?: number,tipo?: string){

  this.marca=marca;
  this.nombre=nombre;
  this.stock=stock;
  this.precio=precio;
  this.tipo=tipo;
}



}
