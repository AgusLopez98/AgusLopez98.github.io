import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './components/error404/error404.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    Error404Component,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Error404Component,
    NavbarComponent
  ]
})
export class SharedModule { }
