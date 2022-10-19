import { TestBed } from '@angular/core/testing';

import { DealRecordsService } from './deal-records.service';

describe('DealRecordsService', () => {
  let service: DealRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DealRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
