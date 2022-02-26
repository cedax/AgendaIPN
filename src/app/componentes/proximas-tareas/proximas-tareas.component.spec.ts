import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximasTareasComponent } from './proximas-tareas.component';

describe('ProximasTareasComponent', () => {
  let component: ProximasTareasComponent;
  let fixture: ComponentFixture<ProximasTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximasTareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximasTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
