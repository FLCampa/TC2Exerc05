import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacaAutomovelAntigaComponent } from './placa-automovel-antiga.component';

describe('PlacaAutomovelAntigaComponent', () => {
  let component: PlacaAutomovelAntigaComponent;
  let fixture: ComponentFixture<PlacaAutomovelAntigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacaAutomovelAntigaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacaAutomovelAntigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
