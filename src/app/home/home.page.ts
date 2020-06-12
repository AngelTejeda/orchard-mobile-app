import { Component } from '@angular/core';
import {MenuController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private menu: MenuController, private router: Router) {}
    
    sliderConfig = {
      initialSlide: 0,
      speed: 400,
      autoplay: true
    };

    productos = [
        {
          nombre: "Maíz",
          descripcion: "Directo de la mejor huerta, ofrecemos los mejores maíces para usted y toda su familia." +
          "Venga y compruébelo usted mismo",
          imagen: "assets/Productos/Cultivos/maiz1.jpg",
          referencia: "/productos/cultivos"
        },
        {
          nombre: "Naranja",
          descripcion: "Dulce naranja de gran tamaño libre de fertilizante lista para consumirla entera o en jugo.",
          imagen: 'assets/Productos/Frutas/naranja1.jpg',
          referencia: "/productos/frutas"
        },
        {
            nombre: "Sandía",
            descripcion: "Jugosa sandia de gran tamaño preparada para aportar muchas vitaminas" +
            "y minerales en sus ricos cocteles.",
            imagen: "assets/Productos/Frutas/sandia1.jpg",
            referencia: "/productos/frutas"
          }
      ]

}
