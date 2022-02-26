import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaNotaFormComponent } from './nueva-nota-form.component';

describe('NuevaNotaFormComponent', () => {
  let component: NuevaNotaFormComponent;
  let fixture: ComponentFixture<NuevaNotaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaNotaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaNotaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
