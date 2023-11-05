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
Math: any;

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

}
