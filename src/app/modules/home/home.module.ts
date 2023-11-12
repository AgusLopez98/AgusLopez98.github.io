import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ProductoPopupComponent } from './components/producto-popup/producto-popup.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ProductoPopupComponent,
    CartPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AuthModule,
    SharedModule,
    FormsModule
  ]
})
export class HomeModule { }
