import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.page.html',
  styleUrls: ['./new-form.page.scss'],
})
export class NewFormPage implements OnInit {

  constructor(private formBuilder: FormBuilder){
  }
  ngOnInit(){
  }

  citaForm = this.formBuilder.group({
    nombre: [''],
    telefono: [''],
    huerto: [''],
    horario: [''],
    comentario: ['']
  });

  public submit(){
    console.log(this.citaForm.value);
  }
  
  
}
