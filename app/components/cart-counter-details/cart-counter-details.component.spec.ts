import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCounterDetailsComponent } from './cart-counter-details.component';

describe('CartCounterDetailsComponent', () => {
  let component: CartCounterDetailsComponent;
  let fixture: ComponentFixture<CartCounterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartCounterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCounterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
