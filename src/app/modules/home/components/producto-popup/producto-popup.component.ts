import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/core/models';

@Component({
  selector: 'app-producto-popup',
  templateUrl: './producto-popup.component.html',
  styleUrls: ['./producto-popup.component.css']
})
export class ProductoPopupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ProductoPopupComponent>) {}

  public carrito: Array<Product> = [];

  public cerrar(){
    this.dialogRef.close();
    this.data = null;
  }
  
  public agregarAlCarrito(producto: Product) {
    this.carrito.push(this.data!);
    this.data = null;
  }
}
