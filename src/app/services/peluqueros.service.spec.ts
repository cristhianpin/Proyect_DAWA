import { TestBed } from '@angular/core/testing';

import { PeluquerosService } from './peluqueros.service';

describe('PeluquerosService', () => {
  let service: PeluquerosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeluquerosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
