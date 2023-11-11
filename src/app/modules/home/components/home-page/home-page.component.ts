import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/core/models';
import { ApiService } from 'src/app/core/services/api.service';
import { ProductoPopupComponent } from '../producto-popup/producto-popup.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  public arrayProducts: Array<Product> = [];
  public busqueda: string = '';
  public categoriesFilter: Set<string> = new Set<string>();

  ngOnInit(): void {
    this.getProducts();
  }

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

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

  public toggleCategory(category: string): void {
    if (this.categoriesFilter.has(category)) {
      this.categoriesFilter.delete(category);
    } else {
      this.categoriesFilter.add(category);
    }
  }

  public buscarProducto(): Product[] {
    return this.arrayProducts.filter(producto => {
      const title = producto.title?.toLowerCase();
      const brand = producto.brand?.toLowerCase();
      const search = this.busqueda.toLowerCase();

      const categoryMatch = this.categoriesFilter.size === 0 ||
        (producto.category && this.categoriesFilter.has(producto.category));

      return categoryMatch && (title?.includes(search) || brand?.includes(search));
    });
  }


  public cargar(producto: Product) {
    let dialogRef = this.dialog.open(ProductoPopupComponent, { data: producto, height: '50rem', width: '50rem', backdropClass: "background-dialog" });
  }

}
