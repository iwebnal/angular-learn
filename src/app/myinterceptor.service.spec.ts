import { TestBed, inject } from '@angular/core/testing';

import { MyinterceptorService } from './myinterceptor.service';

describe('MyinterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyinterceptorService]
    });
  });

  it('should be created', inject([MyinterceptorService], (service: MyinterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
