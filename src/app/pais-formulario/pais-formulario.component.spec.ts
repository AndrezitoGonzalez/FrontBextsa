import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisFormularioComponent } from './pais-formulario.component';

describe('PaisFormularioComponent', () => {
  let component: PaisFormularioComponent;
  let fixture: ComponentFixture<PaisFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaisFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaisFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
