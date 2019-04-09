import { TestBed } from '@angular/core/testing';

import { ProductDisplayService } from './product-display.service';

describe('ProductDisplayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductDisplayService = TestBed.get(ProductDisplayService);
    expect(service).toBeTruthy();
  });
});
