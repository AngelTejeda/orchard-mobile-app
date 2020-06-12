import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.page.html',
  styleUrls: ['./new-form.page.scss'],
})
export class NewFormPage implements OnInit {

  citaForm: FormGroup = null;

  huertos = [
    'Huerto 1',
    'Huerto 2'
  ]

  constructor(private formBuilder: FormBuilder, public composer:EmailComposer){
     this.citaForm = this.formBuilder.group({
      nombre: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      telefono: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])],
      huerto: ['', Validators.required],
      horario: ['', Validators.required],
      comentario: ['']
    });
  }
  ngOnInit(){
  }

  public submit(){
    this.SendForm();
    console.log(this.citaForm.value);
    console.log(this.citaForm.value['nombre']);
    this.citaForm.reset();
  }

  SendForm(){
    let email={
      to: 'sylnne.21@gmail.com',
      subject: 'Agendar cita',
      body: this.citaForm.value['nombre']+' desea agendar una cita en el horario '+
      this.citaForm.value['horario']+'.<br>'+
      this.citaForm.value['huerto']+
      '<br>'+this.citaForm.value['comentario']+
      this.citaForm.value['telefono'],
      app: "Gmail",
      isHtml: true
    }
    this.composer.open(email);
    console.log('Se ha enviado el correo');
  }
  
  
}
