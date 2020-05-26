import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

}
