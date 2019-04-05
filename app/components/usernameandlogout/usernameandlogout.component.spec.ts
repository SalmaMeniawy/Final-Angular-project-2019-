import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameandlogoutComponent } from './usernameandlogout.component';

describe('UsernameandlogoutComponent', () => {
  let component: UsernameandlogoutComponent;
  let fixture: ComponentFixture<UsernameandlogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameandlogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameandlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
