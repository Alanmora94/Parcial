// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapboxKey: 'pk.eyJ1IjoiYWxhbm1vcmEyNyIsImEiOiJja2JqdGNtZTYwb3ZyMnRxcG5yejFvYnZzIn0.L_JWsJ_8uKw5PGKnSYuIRg',
  firebase: {
    apiKey: "AIzaSyAqxv6YfrpB6itaH5JxwArxwLzoQvQm7hs",
    authDomain: "practica20-5dba7.firebaseapp.com",
    databaseURL: "https://practica20-5dba7.firebaseio.com",
    projectId: "practica20-5dba7",
    storageBucket: "practica20-5dba7.appspot.com",
    messagingSenderId: "535751449514",
    appId: "1:535751449514:web:2a1f14c79af7aa47f2e9d3",
    measurementId: "G-7TTTYZG4TE"
  }
};




/*

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhbm1vcmEyNyIsImEiOiJja2JqdGNtZTYwb3ZyMnRxcG5yejFvYnZzIn0.L_JWsJ_8uKw5PGKnSYuIRg';
var map = new mapboxgl.Map({
  container: 'YOUR_CONTAINER_ELEMENT_ID',
  style: 'mapbox://styles/mapbox/streets-v11'
});




 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
