import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistcounterComponent } from './wishlistcounter.component';

describe('WishlistcounterComponent', () => {
  let component: WishlistcounterComponent;
  let fixture: ComponentFixture<WishlistcounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistcounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
