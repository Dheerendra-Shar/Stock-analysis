import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorsRoutingModule } from './calculators-routing.module';
import { EpsCalcComponent } from './eps-calc/eps-calc.component';
import { EpsgrowthCalcComponent } from './epsgrowth-calc/epsgrowth-calc.component';
import { PeCalcComponent } from './pe-calc/pe-calc.component';
import { IntrinsicValueComponent } from './intrinsic-value/intrinsic-value.component';
import { NetIncomeComponent } from './net-income/net-income.component';
import { CagrComponent } from './cagr/cagr.component';


@NgModule({
  declarations: [
    EpsCalcComponent,
    EpsgrowthCalcComponent,
    PeCalcComponent,
    IntrinsicValueComponent,
    NetIncomeComponent,
    CagrComponent
  ],
  imports: [
    CommonModule,
    CalculatorsRoutingModule
  ]
})
export class CalculatorsModule { }
