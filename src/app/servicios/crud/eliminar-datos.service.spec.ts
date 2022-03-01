import { TestBed } from '@angular/core/testing';

import { EliminarDatosService } from './eliminar-datos.service';

describe('EliminarDatosService', () => {
  let service: EliminarDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliminarDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
