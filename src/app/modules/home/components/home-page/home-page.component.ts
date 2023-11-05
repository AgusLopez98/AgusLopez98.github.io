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

  ngOnInit(): void {
      this.getProducts();
  }

  constructor(private apiService: ApiService) { }

  public getProducts(){
    this.apiService.getProductsFromAPI().subscribe({
      next: resp => this.arrayProducts = resp,
      error: (error) =>{
        console.log(error);
        this.arrayProducts = [];
      }
    })
  }

}
