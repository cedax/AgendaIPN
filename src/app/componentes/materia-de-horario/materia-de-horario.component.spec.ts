import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaDeHorarioComponent } from './materia-de-horario.component';

describe('MateriaDeHorarioComponent', () => {
  let component: MateriaDeHorarioComponent;
  let fixture: ComponentFixture<MateriaDeHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaDeHorarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaDeHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
