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
    
    productos = [
        {
          nombre: "Producto 1",
          descripcion: "Este es el producto 1.",
          imagen: "assets/Productos/Cultivos/papa1.jpg",
          referencia: "/productos/cultivos"
        },
        {
          nombre: "Producto 2",
          descripcion: "Este es el producto 2.",
          imagen: 'assets/Productos/Cultivos/papa1.jpg',
          referencia: "/productos/frutas"
        },
        {
            nombre: "Producto 3",
            descripcion: "Este es el producto 3.",
            imagen: "assets/Productos/Cultivos/papa1.jpg",
            referencia: "/productos/frutas"
          }
      ]

}
