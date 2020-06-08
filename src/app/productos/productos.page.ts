import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor(private menu: MenuController) { }

  reproducir(producto) {
    let sonido = new Audio();
    sonido.src = producto.audio;
    sonido.load();
    sonido.play();
  }

  productos = [
    {
      nombre: "Cultivos",
      descripcion: "Estos productos son de cultivo.",
      imagen: "assets/Productos/cultivos.jpg",
      referencia: "/productos/cultivos"
    },
    {
      nombre: "Frutas",
      descripcion: "Estas son frutas",
      imagen: "assets/Productos/frutas.jpg",
      referencia: "/productos/frutas"
    }
  ]

  ngOnInit() {
  }

}
