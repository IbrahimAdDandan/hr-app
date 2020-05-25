import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SecurityModule } from './security/security.module';
import { EmployeeModule } from './employee/employee.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SecurityModule,
    EmployeeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
