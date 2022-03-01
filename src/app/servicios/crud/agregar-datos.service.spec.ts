import { TestBed } from '@angular/core/testing';

import { AgregarDatosService } from './agregar-datos.service';

describe('AgregarDatosService', () => {
  let service: AgregarDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
