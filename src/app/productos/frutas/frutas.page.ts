import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";
import { Howl } from 'howler';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.page.html',
  styleUrls: ['./frutas.page.scss'],
})
export class FrutasPage implements OnInit {

  constructor(private menu: MenuController) { }
  
  frutas = [
    {
      nombre: "Sandía",
      descripcion: "Jugosa sandia de gran tamaño preparada para aportar muchas vitaminas" +
      "y minerales en sus ricos cocteles.",
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
      descripcion: "Aromático melon de cascara suave que te dejara encantado con su delicioso y refrescante sabor.",
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
      descripcion: "Dulce naranja de gran tamaño libre de fertilizante lista para consumirla entera o en jugo.",
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

  activeAudio: String = null;
  player: Howl = null;
  isPlaying = false;

  start(audio: String, event: any) {
    if(this.player) {
      this.player.stop();
    }
    this.player = new Howl({
      src: [audio],
      onplay: () => {
        this.isPlaying = true;
        this.activeAudio = audio;
      },
      onend: () => {
        this.isPlaying = false;
      }
    })
    this.player.play();
  }

  togglePlayer(pause) {
    this.isPlaying = !pause;
    if(pause) {
      this.player.pause();
    }
    else {
      this.player.play();
    }
  }

  ngOnInit() {
  }

}
