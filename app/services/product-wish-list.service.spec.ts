import { TestBed } from '@angular/core/testing';

import { ProductWishListService } from './product-wish-list.service';

describe('ProductWishListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductWishListService = TestBed.get(ProductWishListService);
    expect(service).toBeTruthy();
  });
});
