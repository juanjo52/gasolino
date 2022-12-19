import { TestBed } from '@angular/core/testing';

import { DataCommunicatingService } from './data-communicating.service';

describe('DataCommunicatingService', () => {
  let service: DataCommunicatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCommunicatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
