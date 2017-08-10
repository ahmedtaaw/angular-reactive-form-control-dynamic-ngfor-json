import { TestBed, inject } from '@angular/core/testing';

import { EmaillistService } from './emaillist.service';

describe('EmaillistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmaillistService]
    });
  });

  it('should ...', inject([EmaillistService], (service: EmaillistService) => {
    expect(service).toBeTruthy();
  }));
});
