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
      body: 'Quiero ver tus melones bb '+this.nombre,
        
        huerto: this.huerto,
        horario: this.horario,
        comentario: this.comentario,
      
      app: "Gmail",
      isHtml: false
    }
    this.composer.open(email);
  }
}
