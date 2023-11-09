import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit{

  public arrayProducts : Array<Product> = [];
  public productoSeleccionado: Product | null = null;
  public carrito: Array<Product> = [];
  public busqueda: string = '';

  ngOnInit(): void {
      this.getProducts();
  }

  constructor(private apiService: ApiService) { }

  public getProducts() {
    this.apiService.getProductsFromAPI().subscribe({
      next: (resp: any) => {
        // Verifica si 'resp' tiene una propiedad 'products' que es un array
        if (resp && Array.isArray(resp.products)) {
          this.arrayProducts = resp.products;
        }
      },
      error: (error) => {
        console.log(error);
        this.arrayProducts = [];
      },
    });
  }

  public buscarProducto() {
    return this.arrayProducts.filter(producto => {
      const tittle = producto.title?.toLowerCase();
      const brand = producto.brand?.toLowerCase();
      const search = this.busqueda.toLowerCase();
      
      return tittle?.includes(search) || brand?.includes(search);
    });
  }

  public cargar(producto: Product) {
    this.productoSeleccionado = producto; // Cuando se hace clic en un producto, se asigna a productoSeleccionado
  }

  public cerrar() {
    this.productoSeleccionado = null; // Para cerrar el producto seleccionado, asigna null a productoSeleccionado
  }

  public agregarAlCarrito(producto: Product){
    this.carrito.push(this.productoSeleccionado!);
  }

  

}
