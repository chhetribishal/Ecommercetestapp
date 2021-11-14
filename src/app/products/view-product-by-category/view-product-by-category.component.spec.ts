import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductByCategoryComponent } from './view-product-by-category.component';

describe('ViewProductByCategoryComponent', () => {
  let component: ViewProductByCategoryComponent;
  let fixture: ComponentFixture<ViewProductByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
