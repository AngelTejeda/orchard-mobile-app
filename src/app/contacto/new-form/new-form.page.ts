import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

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

  constructor(private formBuilder: FormBuilder){
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
    console.log(this.citaForm.value);
    this.citaForm.reset();
  }
  
  
}
