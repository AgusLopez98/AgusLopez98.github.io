import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart, Product, User } from 'src/app/core/models';
import { CartService } from 'src/app/core/services/cart.service';
import { DataService } from 'src/app/core/services/data.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit{

  constructor(private dataService: DataService, private userService: UsersService, private cartService: CartService, private router: Router) {}

  public cart: Cart = new Cart({id: null});
  public user: User = this.dataService.getData();
  
  ngOnInit(): void {
    this.cart.date = new Date().toISOString();
    this.cart.products = this.dataService.getCarrito();
    this.cart.total = this.getTotal();
    this.cart.userId = this.user.id;
  }

  public realizarCompra(){

    if (!this.user.cart) {
      this.user.cart = [];
    }
    this.user.cart.push(this.cart);

    this.userService.updateUserToApi(this.user).subscribe({
      next:(resp)=>{
        if(resp){
          console.log('carrito agregado al usuario');
        }
      },

      error: (error=>{console.log(error);})
    })

    this.cartService.addCartToApi(this.cart).subscribe({
      next:(resp)=>{
        if(resp){
          console.log('carrito agregado a DataBase');
        }
      },

      error: (error=>{console.log(error);})
    })

    this.dataService.setEmpty();

    alert('compra reliazada con exito - Muchas gracias.')
  }

  public getTotal(): number{
    let total: number = 0;
    let carrito: Array<Product> = this.dataService.getCarrito();

    carrito.forEach(producto => {
      total = producto.price! + total;
    });

    return total;
  }

}
