import { TestBed } from '@angular/core/testing';

import { GenerarObjDetalleService } from './generar-obj-detalle.service';

describe('GenerarObjDetalleService', () => {
  let service: GenerarObjDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerarObjDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
