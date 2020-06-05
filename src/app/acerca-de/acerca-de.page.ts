import { Component, OnInit } from '@angular/core';
//Importamos las dependencias de la geolocalizacion
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';

//Declaramos la variable google de donde usaremos los métodos principales para el mapa
declare var google;

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage implements OnInit {

  //Creamos nuestras variables globales
  map: any;
  mapa: any;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  servicio = new google.maps.DirectionsService();
  display = new google.maps.DirectionsRenderer();

  destination = { lat: 25.725627, lng: -100.315146 };
  destino = {lat: 25.724452, lng: -100.307421};

  constructor(private geolocation: Geolocation,
    private loadCtrl: LoadingController) {
  }

  //Al cargar la página, cargamos el mapa
  ngOnInit() {
    this.loadMap();
    this.loadMapa();
  }  

  loadMap() {
    //Obtenemos nuestro elemento map del HTmL
    const mapEle: HTMLElement = document.getElementById('map');
   // const indicacionesEle : HTMLElement = document.getElementById('indicaciones');
    //Creamos un mapa con centro en la facultad
    this.map = new google.maps.Map(mapEle, {
      center: this.destination,
      zoom: 12
    });
  
    this.directionsDisplay.setMap(this.map);
  //  this.directionsDisplay.setPanel(indicacionesEle);
  
    //Cuando el mapa esté "listo", calcular la ruta
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.calculateRoute();
    });
  }
  private async calculateRoute() {
    this.directionsService.route({
      origin: await this.obtenerLocalizacion(),
      destination: this.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (response, status)  => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsDisplay.setDirections(response);
      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
  }
  loadMapa() {
    //Obtenemos nuestro elemento map del HTmL
    const mapaEle: HTMLElement = document.getElementById('mapa');
    //const indicacionesEle : HTMLElement = document.getElementById('indicaciones');
    //Creamos un mapa con centro en la facultad
    this.mapa = new google.maps.Map(mapaEle, {
    //  center: this.destino,
      zoom: 12
    });
  
    this.display.setMap(this.mapa);
    //this.directionsDisplay.setPanel(indicacionesEle);
  
    //Cuando el mapa esté "listo", calcular la ruta
    google.maps.event.addListenerOnce(this.mapa, 'idle', () => {
      mapaEle.classList.add('show-map');
      this.calcularRuta();
    });
  }

  private async calcularRuta() {
    this.servicio.route({
      origin: await this.obtenerLocalizacion(),
      destination: this.destino,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (response, status)  => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.display.setDirections(response);
      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
  }

  private async obtenerLocalizacion(){
    const rta = await this.geolocation.getCurrentPosition();
    console.log(rta);
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }

}










