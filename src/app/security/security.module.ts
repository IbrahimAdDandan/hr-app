import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RolesComponent } from './components/roles/roles.component';



@NgModule({
  declarations: [RolesComponent],
  imports: [
    SharedModule
  ]
})
export class SecurityModule { }
