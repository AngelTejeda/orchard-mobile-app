import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.page.html',
  styleUrls: ['./new-form.page.scss'],
})
export class NewFormPage implements OnInit {

  nombre='';
  telefono='';
  huerto='';
  horario='';
  comentario='';
  constructor(public composer:EmailComposer){

  }
  ngOnInit(){

  }
  
  SendForm(){
    let email={
      to: 'sylnne.21@gmail.com',
      subject: 'Agendar cita',
      nombre: this.nombre,
      telefono: this.telefono,
      huerto: this.huerto,
      horario: this.horario,
      comentario: this.comentario,
      body: this.nombre+' :'+this.comentario+
      'Fecha y hora de la cita: '+this.horario+
      'Huerto a visitar: '+this.huerto+
      'Telefono: '+this.telefono,
      app: "gmail",
      isHtml: true
    }
    this.composer.open(email);
  }
}
