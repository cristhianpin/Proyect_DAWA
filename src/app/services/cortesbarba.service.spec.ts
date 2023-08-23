import { TestBed } from '@angular/core/testing';

import { CortesbarbaService } from './cortesbarba.service';

describe('CortesbarbaService', () => {
  let service: CortesbarbaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CortesbarbaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
