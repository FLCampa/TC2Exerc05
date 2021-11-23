import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneBrComponent } from './telefone-br.component';

describe('TelefoneBrComponent', () => {
  let component: TelefoneBrComponent;
  let fixture: ComponentFixture<TelefoneBrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefoneBrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneBrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
