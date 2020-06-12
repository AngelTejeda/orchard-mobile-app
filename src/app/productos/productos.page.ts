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
      descripcion: "Aqui encontrarás los mejores cultivos, con los mejores tratos para la mejor calidad.",
      imagen: "assets/Productos/cultivos.jpg",
      referencia: "/productos/cultivos"
    },
    {
      nombre: "Frutas",
      descripcion: "Las frutas mas frescas y de mejor calidad, las podrás encontrar aqui.",
      imagen: "assets/Productos/frutas.jpg",
      referencia: "/productos/frutas"
    }
  ]

  ngOnInit() {
  }

}
