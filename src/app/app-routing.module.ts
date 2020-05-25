import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'security', loadChildren: () => import('./security/security-routing.module').then(m => m.SecurityRoutingModule),
  },
  {
    path: 'employee', loadChildren: () => import('./employee/employee-routing.module').then(m => m.EmployeeRoutingModule),
  }
];

@NgModule({
  declarations: [],
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
