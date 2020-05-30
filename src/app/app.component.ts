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
      referencia: "/home"
    },
    {
      nombre: "Contacto",
      referencia: "/contacto"
    },
    {
      nombre: "Productos",
      children: [
        {
          nombre: "Nuestros Productos",
          referencia: "/productos",
        },
        {
          nombre: "Cultivos",
          referencia: "/productos/cultivos",
        },
        {
          nombre: "Frutas",
          referencia: "/productos/frutas",
        }

      ]
    },
    {
      nombre: "Acerca de",
      referencia: "/acerca-de"
    }
  ]

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}