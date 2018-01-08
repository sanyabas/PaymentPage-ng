import { TestBed, inject } from '@angular/core/testing';

import { BankingServiceService } from './banking-service.service';

describe('BankingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankingServiceService]
    });
  });

  it('should be created', inject([BankingServiceService], (service: BankingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
