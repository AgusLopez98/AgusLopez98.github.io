import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models';
import { CartService } from 'src/app/core/services/cart.service';
import { DataService } from 'src/app/core/services/data.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{

  constructor(private router: Router,private cartService: CartService, private dataService: DataService, private userService: UsersService) {}

  ngOnInit(): void {
    this.listarCarrito();
  }

  public carrito: Array<Product> = [];

  public listarCarrito(){
    this.carrito = this.dataService.getCarrito();
  }
}
