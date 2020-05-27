import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';
import { analyzeAndValidateNgModules } from '@angular/compiler';

declare var google;

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage implements OnInit {
  mapReferencia = null;

  constructor(private geolocation: Geolocation,
    private loadCtrl: LoadingController) {
  }

  ngOnInit() {
    this.loadMap();
  }

  async loadMap(){
    const loading = await this.loadCtrl.create();
    loading.present();
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
      //Es el objeto con la latitud y longitud
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }

}
