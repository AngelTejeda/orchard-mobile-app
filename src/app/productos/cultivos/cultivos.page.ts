import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";
import { Howl } from 'howler';

@Component({
  selector: 'app-cultivos',
  templateUrl: './cultivos.page.html',
  styleUrls: ['./cultivos.page.scss'],
})
export class CultivosPage implements OnInit {

  constructor(private menu: MenuController) { }

  cultivos = [
    {
      nombre: "Papa",
      descripcion: "Esta es una papa.",
      imagenes: [
        {
          ruta_imagen: "assets/Productos/Cultivos/papa1.jpg",
        },
        {
          ruta_imagen: "assets/Productos/Cultivos/papa2.jpg",
        },
        {
          ruta_imagen: "assets/Productos/Cultivos/papa3.jpg",
        }
      ],
      audio: "assets/Productos/Cultivos/papa.mp3"
    },
    {
      nombre: "Frijol",
      descripcion: "Esto es frijol.",
      imagenes: [
        {
          ruta_imagen: "assets/Productos/Cultivos/frijol1.jpg",
        },
        {
          ruta_imagen: "assets/Productos/Cultivos/frijol2.jpg",
        },
        {
          ruta_imagen: "assets/Productos/Cultivos/frijol3.jpg",
        }
      ],
      audio: "assets/Productos/Cultivos/frijol.mp3"
    },
    {
      nombre: "Maíz",
      descripcion: "Esto es maíz.",
      imagenes: [
        {
          ruta_imagen: "assets/Productos/Cultivos/maiz1.jpg",
        },
        {
          ruta_imagen: "assets/Productos/Cultivos/maiz2.jpg",
        },
        {
          ruta_imagen: "assets/Productos/Cultivos/maiz3.jpg",
        }
      ],
      audio: "assets/Productos/Cultivos/maiz.mp3"
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
