import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpsCalcComponent } from './eps-calc.component';

describe('EpsCalcComponent', () => {
  let component: EpsCalcComponent;
  let fixture: ComponentFixture<EpsCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpsCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpsCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
