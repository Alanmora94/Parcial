export class Vehiculo {

  id?: string;
  marca?: string;
  modelo?: string;
  anio?: number;
  kilometro?: number;
  tipo?: string;
  imagen?: any;

constructor(marca?: string,modelo?: string,anio?: number,kilometro?: number,tipo?: string,imagen?: any){

  this.marca=marca;
  this.modelo=modelo;
  this.anio=anio;
  this.imagen=imagen;
  this.kilometro=kilometro;
  this.tipo=tipo;
}


}

