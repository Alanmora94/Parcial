import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';



import * as Mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';


//import React from 'react';
//import ReactDOM from 'react-dom';


import { MarkerManager } from '@agm/core';

//import https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.5.1/mapbox-gl-geocoder.min.js

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  mapa: Mapboxgl.Map;


  constructor() {}

  ngOnInit(){

    (Mapboxgl as any).accessToken = environment.mapboxKey;

    this.mapa = new Mapboxgl.Map({
      container: 'mapa-maxbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-58.4093064, -34.6247452], // starting position
      zoom: 16.6 // starting zoom
      });

      this.CrearMarcador(-58.4093064, -34.6247452);

      //this.geo();

    }


    geo(){

      this.mapa.addControl(
        new MapboxGeocoder.MapboxGeocoder({
        accessToken: Mapboxgl.accessToken,
        mapboxgl: Mapboxgl
        })
        );

    }





  CrearMarcador(lng: number, lat: number){

    const marker = new Mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([lng, lat])
      .addTo(this.mapa);


      marker.on('drag', () =>{

        console.log(marker.getLngLat() )

      })


  }







}
