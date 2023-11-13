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
  public total: number = 0;

  public listarCarrito(){
    this.carrito = this.dataService.getCarrito();

    this.carrito.forEach(producto => {
      this.total = producto.price! + this.total;
    });
  }

  public eliminarProducto(producto: Product){
    const index = this.carrito.indexOf(producto);

    if(index !== -1){
      this.total = this.total - this.carrito[index].price!;
      this.carrito.splice(index,1);
    }
  }

  public irPago(){
    this.router.navigate(['/home/payment']);
  }
}
