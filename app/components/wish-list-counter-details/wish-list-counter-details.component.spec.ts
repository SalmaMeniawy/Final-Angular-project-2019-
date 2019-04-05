import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListCounterDetailsComponent } from './wish-list-counter-details.component';

describe('WishListCounterDetailsComponent', () => {
  let component: WishListCounterDetailsComponent;
  let fixture: ComponentFixture<WishListCounterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishListCounterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListCounterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
