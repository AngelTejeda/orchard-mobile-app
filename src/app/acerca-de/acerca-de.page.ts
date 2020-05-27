import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";
//LOS 2 IMPORTS SIGUIENTES SON PARA LA USAR LA GEOLOCALIZACION
//EN EN EL APP MODULE.TS AÑADI EL PRIMER IMPORT Y EL PROVIDER DE GEOLOCALIZACION
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage implements OnInit {
  //VARIABLE QUE GUARDA LA REF DEL MAPA PARA PODER ENVIARLO A FUNCIONS
  mapReferencia = null;

  constructor(private geolocation: Geolocation,
    //EL LOADCTRL SIRVE PARA QUE CUANDO VEAN EL MAPA LES APAREZCA EL SIGNO DE CARGANDO EN PLAN DE "NO LE MUEVAS HASTA QUE CARGUE"
    private loadCtrl: LoadingController) {
  }
  //ES PA 
  ngOnInit() {
    this.loadMap();
  }
  //Usamos async para no mm hacer una promesa xd Por asi decirlo 
  async loadMap(){
    //aqui es donde se usa eso de el simbolo de cargando
    const loading = await this.loadCtrl.create();
    loading.present();
    //obtenemos la latitud y longitud(?), obtenerlocalizacion es un metedo abajo
    const myLatLng = await this.obtenerLocalizacion();
    console.log(myLatLng);
    const mapEle: HTMLElement = document.getElementById('map');
    this.mapReferencia = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
    google.maps.event
    .addListenerOnce(this.mapReferencia, 'idle', ()=>{
      //console.log('added');
      loading.dismiss();
      this.agregarMarcador(myLatLng.lat, myLatLng.lng);
    });
  }

  private agregarMarcador(lat: number, lng: number){
    const marker = new google.maps.Marker({
      position:{ 
        //JS Reconoce que los nombres son iguales, entonces no es necesario asignarlos como valor
        lat: lat,
        lng: lng
      },
      zoom: 8,
      map: this.mapReferencia,
      title: 'Holis'
    })
  };

  private async obtenerLocalizacion(){
    const rta = await this.geolocation.getCurrentPosition();
    return {
      //Es el objeto con la latitud y longitud y como antes hay un return pues se regresa, daa
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }

}
