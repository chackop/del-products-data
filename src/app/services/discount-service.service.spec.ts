import { TestBed, inject } from '@angular/core/testing';

import { DiscountServiceService } from './discount-service.service';

describe('DiscountServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscountServiceService]
    });
  });

  it('should be created', inject([DiscountServiceService], (service: DiscountServiceService) => {
    expect(service).toBeTruthy();
  }));
});
