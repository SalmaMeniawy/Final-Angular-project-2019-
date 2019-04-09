import { TestBed } from '@angular/core/testing';

import { ProductDeliverService } from './product-deliver.service';

describe('ProductDeliverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductDeliverService = TestBed.get(ProductDeliverService);
    expect(service).toBeTruthy();
  });
});
