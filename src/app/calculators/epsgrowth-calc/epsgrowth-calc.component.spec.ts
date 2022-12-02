import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpsgrowthCalcComponent } from './epsgrowth-calc.component';

describe('EpsgrowthCalcComponent', () => {
  let component: EpsgrowthCalcComponent;
  let fixture: ComponentFixture<EpsgrowthCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpsgrowthCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpsgrowthCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
