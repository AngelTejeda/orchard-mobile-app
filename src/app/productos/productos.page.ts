import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor(
    
  ) {

  }

  sliderConfig = {
    initialSlide: 0,
    speed: 400,
    autoplay: true
  };

  productos = [
    {
      nombre: "Cultivos",
      descripcion: "Aqui encontrarás los mejores cultivos, con los mejores tratos para la mejor calidad.",
      imagenes: [
        {
          imagen: "assets/Productos/Cultivos/papa1.jpg",
        },
        {
          imagen: "assets/Productos/Cultivos/frijol3.jpg",
        },
        {
          imagen: "assets/Productos/Cultivos/maiz3.jpg",
        }
      ],
      referencia: "/productos/cultivos"
    },
    {
      nombre: "Frutas",
      descripcion: "Las frutas más frescas y de mejor calidad, las podrás encontrar aqui.",
      imagenes: [
        {
          imagen: "assets/Productos/Frutas/melon2.jpg",
        },
        {
          imagen: "assets/Productos/Frutas/sandia3.jpg",
        },
        {
          imagen: "assets/Productos/Frutas/naranja3.jpg",
        }
      ],
      referencia: "/productos/frutas"
    }
  ]

  ngOnInit() {
  }
}