import { TestBed } from '@angular/core/testing';

import { RegistrarclienteService } from './registrarcliente.service';

describe('RegistrarclienteService', () => {
  let service: RegistrarclienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarclienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
