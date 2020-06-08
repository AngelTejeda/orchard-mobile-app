import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private animationCtrl: AnimationController
  ) {
    this.initializeApp();
  }

  animateArrow(open) {
    let animation: Animation;
    if (open) {
      animation = this.animationCtrl.create()
          .addElement(document.querySelector('.arrow'))
          .duration(100)
          .fromTo('transform', 'rotate(90deg)', 'rotate(0deg)');
    } else {
      animation = this.animationCtrl.create()
          .addElement(document.querySelector('.arrow'))
          .duration(100)
          .fromTo('transform', 'rotate(0deg)', 'rotate(90deg)');
    }
    animation.play()
  }

  paginas = [
    {
      nombre: "Inicio",
      referencia: "/home",
      icon: "home-outline"
    },
    {
      nombre: "Contacto",
      referencia: "/contacto",
      icon: "calendar-outline"
    },
    {
      nombre: "Productos",
      referencia: "/productos",
      icon: "pricetags-outline",
      children: [
        {
          nombre: "Cultivos",
          referencia: "/productos/cultivos",
          icon: "leaf-outline"
        },
        {
          nombre: "Frutas",
          referencia: "/productos/frutas",
          icon: "nutrition-outline"
        }

      ]
    },
    {
      nombre: "Acerca de",
      referencia: "/acerca-de",
      icon: "information-circle-outline"
    }
  ]

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}