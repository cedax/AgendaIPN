import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaTareaFormComponent } from './nueva-tarea-form.component';

describe('NuevaTareaFormComponent', () => {
  let component: NuevaTareaFormComponent;
  let fixture: ComponentFixture<NuevaTareaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaTareaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaTareaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
