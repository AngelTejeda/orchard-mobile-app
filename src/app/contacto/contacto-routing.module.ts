import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactoPage } from './contacto.page';

const routes: Routes = [
  {
    path: '',
    component: ContactoPage
  },  {
    path: 'new-form',
    loadChildren: () => import('./new-form/new-form.module').then( m => m.NewFormPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactoPageRoutingModule {}
