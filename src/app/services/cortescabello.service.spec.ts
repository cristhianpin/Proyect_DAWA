import { TestBed } from '@angular/core/testing';

import { CortescabelloService } from './cortescabello.service';

describe('CortescabelloService', () => {
  let service: CortescabelloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CortescabelloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
