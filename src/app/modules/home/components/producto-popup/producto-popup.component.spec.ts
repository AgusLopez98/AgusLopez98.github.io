import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoPopupComponent } from './producto-popup.component';

describe('ProductoPopupComponent', () => {
  let component: ProductoPopupComponent;
  let fixture: ComponentFixture<ProductoPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoPopupComponent]
    });
    fixture = TestBed.createComponent(ProductoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
