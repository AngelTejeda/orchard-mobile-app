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
