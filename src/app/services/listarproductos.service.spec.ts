import { TestBed } from '@angular/core/testing';

import { ListarproductosService } from './listarproductos.service';

describe('ListarproductosService', () => {
  let service: ListarproductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarproductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
