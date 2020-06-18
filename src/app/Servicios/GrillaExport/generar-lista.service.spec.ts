import { TestBed } from '@angular/core/testing';

import { GenerarListaService } from './generar-lista.service';

describe('GenerarListaService', () => {
  let service: GenerarListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerarListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
