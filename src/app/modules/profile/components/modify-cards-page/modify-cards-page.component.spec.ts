import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCardsPageComponent } from './modify-cards-page.component';

describe('ModifyCardsPageComponent', () => {
  let component: ModifyCardsPageComponent;
  let fixture: ComponentFixture<ModifyCardsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyCardsPageComponent]
    });
    fixture = TestBed.createComponent(ModifyCardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
