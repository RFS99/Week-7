import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsPage } from './contacts.page';
import {Sample02Component} from './component/sample02/sample02.component';
import {IonicModule} from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: ContactsPage
  },
  {
    path: ':contactId',
    loadChildren: () => import('./contact-detail/contact-detail.module').then( m => m.ContactDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule],
  exports: [RouterModule, Sample02Component],
  declarations: [
    Sample02Component
  ]
})
export class ContactsPageRoutingModule {}
