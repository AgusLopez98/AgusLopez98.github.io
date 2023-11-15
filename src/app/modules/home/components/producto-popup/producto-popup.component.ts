import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-producto-popup',
  templateUrl: './producto-popup.component.html',
  styleUrls: ['./producto-popup.component.css']
})
export class ProductoPopupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ProductoPopupComponent>, private dataService: DataService, private router: Router) { }

  currentImageIndex = 0;

  cambiarImagen(direccion: number) {
    this.currentImageIndex = (this.currentImageIndex + direccion + this.data.images.length) % this.data.images.length;
  }

  public cerrar() {
    this.dialogRef.close();
  }

  public agregarAlCarrito() {
    if (this.data != null) {
      this.dataService.setCarrito(this.data);
      this.cerrar();
    } else {
      alert('Error en compra del producto.');
    }
  }

  public irPago(){
    this.dataService.setEmpty();
    this.agregarAlCarrito();
    this.router.navigate(['/home/payment']);
  }
}
