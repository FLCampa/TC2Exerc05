import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacaAutomovelMercosulComponent } from './placa-automovel-mercosul.component';

describe('PlacaAutomovelMercosulComponent', () => {
  let component: PlacaAutomovelMercosulComponent;
  let fixture: ComponentFixture<PlacaAutomovelMercosulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacaAutomovelMercosulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacaAutomovelMercosulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
