import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage implements OnInit {

  constructor(private geolocation: Geolocation) {
  }

  ngOnInit() {
    this.loadMap();
  }

  async loadMap(){
    const rta = await this.geolocation.getCurrentPosition();
    const myLatLng = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    console.log(myLatLng);
    const mapEle: HTMLElement = document.getElementById('map');
    const map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    })
  }

}
