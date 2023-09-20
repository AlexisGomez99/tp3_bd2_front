import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDescuentoComponent } from './listado-descuento.component';

describe('ListadoDescuentoComponent', () => {
  let component: ListadoDescuentoComponent;
  let fixture: ComponentFixture<ListadoDescuentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoDescuentoComponent]
    });
    fixture = TestBed.createComponent(ListadoDescuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
