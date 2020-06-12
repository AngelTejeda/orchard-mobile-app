import { Component, OnInit } from '@angular/core';
//Importamos las dependencias de la geolocalizacion
import { Geolocation } from '@ionic-native/geolocation/ngx';

//Declaramos la variable google de donde usaremos los métodos principales para el mapa
declare var google;

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage implements OnInit {
  constructor(
    private geolocation: Geolocation,
  ) {
    
  }

  ngOnInit() {
    this.loadMap();
  }

  indic: Boolean = false;
  huertos = [
    {
      nombre: 'Huerto 1',
      location: {
        lat: 25.725627,
        lng: -100.315146
      },
      zoom: 8
    },
    {
      nombre: 'Huerto 2',
      location: {
        lat: 25.6466554,
        lng: -100.3253636
      },
      zoom: 9
    }
  ]

  //Geolocalización
  //Variables Globales
  map: any;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  sembradio: any = this.huertos[0];

  //Carga del mapa
  loadMap() {
    this.indic = false;
    const mapEle: HTMLElement = document.getElementById('map'); //Obtenemos el elemento donde se mostrará el mapa.
    this.map = new google.maps.Map(mapEle, {
      center: this.sembradio.location,  //Creamos un mapa con centro en el huerto seleccionado.
      zoom: this.sembradio.zoom
    });

    const indicacionesEle : HTMLElement = document.getElementById('indicators');
    this.directionsDisplay.setPanel(indicacionesEle);  
    
    this.directionsDisplay.setMap(this.map);
  
    //Cuando el mapa esté "listo", calcular la ruta
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.calculateRoute();
    });
  }

  //Cálculo de la ruta
  private async calculateRoute() {
    this.directionsService.route({
      origin: await this.obtenerLocalizacion(), //El origen es la ubicación del dispositivo
      destination: this.sembradio.location, //El destino es el huerto seleccionado
      travelMode: google.maps.TravelMode.DRIVING,
    }, (response, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsDisplay.setDirections(response);
      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
  }

  //Ubicación del Dispositivo
  private async obtenerLocalizacion() {
    const rta = await this.geolocation.getCurrentPosition();
    console.log(rta);
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }
}










