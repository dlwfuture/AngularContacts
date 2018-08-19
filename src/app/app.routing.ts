import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
 
export const AppRoutes: Routes = [
    { path: '', component: ListContactsComponent },
    { path: 'add', component: AddContactComponent }
];
 
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);