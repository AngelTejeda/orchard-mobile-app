import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'app-cultivos',
  templateUrl: './cultivos.page.html',
  styleUrls: ['./cultivos.page.scss'],
})
export class CultivosPage implements OnInit {

  constructor(

  ) {

  }

  sliderConfig = {
    initialSlide: 0,
    speed: 400,
    autoplay: true
  };

  cultivos = [
    {
      nombre: "Papa",
      descripcion: "Papa blanca orgánica. Libre de fertilizantes y regadas con agua totalmente natural. Venga a" +
        "probar las mejores papas del estado.",
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
      descripcion: " Cultivado en las mejores tierras del país, venga a comprar todos los kilos de frijoles" +
        "que guste aquí en su huerta.",
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
      descripcion: "Directo de la mejor huerta, ofrecemos los mejores maíces para usted y toda su familia." +
        "Venga y compruébelo usted mismo.",
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

  start(audio: String) {
    if (this.player) {
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
        //this.activeAudio = null;
      }
    })
    this.player.play();
  }

  togglePlayer(pause) {
    this.isPlaying = !pause;
    if (pause) {
      this.player.pause();
    }
    else {
      this.player.play();
    }
  }

  stop() {
    this.player.stop();
    this.isPlaying = false;
    this.activeAudio = null;
  }

  ngOnInit() {
  }
}