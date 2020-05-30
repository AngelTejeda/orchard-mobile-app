import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.page.html',
  styleUrls: ['./frutas.page.scss'],
})
export class FrutasPage implements OnInit {

  constructor(private menu: MenuController) { }

  reproducir(fruta) {
    let sonido = new Audio();
    sonido.src = fruta.audio;
    sonido.load();
    sonido.play();
  }

  frutas = [
    {
      nombre: "Sandía",
      descripcion: "Esta es una sandía.",
      imagenes: [
        {
          ruta_imagen: "assets/Productos/Frutas/sandia1.jpg",
        },
        {
          ruta_imagen: "assets/Productos/Frutas/sandia2.jpg",
        },
        {
          ruta_imagen: "assets/Productos/Frutas/sandia3.jpg",
        }
      ],
      audio: "assets/Productos/Frutas/sandia.mp3"
    },
    {
      nombre: "Melón",
      descripcion: "Este es un melón.",
      imagenes: [
        {
          ruta_imagen: "assets/Productos/Frutas/melon1.jpg",
        },
        {
          ruta_imagen: "assets/Productos/Frutas/melon2.jpg",
        },
        {
          ruta_imagen: "assets/Productos/Frutas/melon3.jpg",
        }
      ],
      audio: "assets/Productos/Frutas/melon.mp3"
    },
    {
      nombre: "Naranja",
      descripcion: "Esta es una naranja.",
      imagenes: [
        {
          ruta_imagen: "assets/Productos/Frutas/naranja1.jpg",
        },
        {
          ruta_imagen: "assets/Productos/Frutas/naranja2.jpg",
        },
        {
          ruta_imagen: "assets/Productos/Frutas/naranja3.jpg",
        }
      ],
      audio: "assets/Productos/Frutas/naranja.mp3"
    }
  ]

  ngOnInit() {
  }

}
