import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CagrComponent } from './cagr/cagr.component';
import { EpsCalcComponent } from './eps-calc/eps-calc.component';
import { EpsgrowthCalcComponent } from './epsgrowth-calc/epsgrowth-calc.component';
import { IntrinsicValueComponent } from './intrinsic-value/intrinsic-value.component';
import { NetIncomeComponent } from './net-income/net-income.component';
import { PeCalcComponent } from './pe-calc/pe-calc.component';

const routes: Routes = [
  {
    path:'',component:EpsCalcComponent
  },
  {
    path:'eps-growth',component:EpsgrowthCalcComponent
  },
  {
    path:'price-to-earning',component:PeCalcComponent
  }, {
    path:'intrinsic-value',component:IntrinsicValueComponent
  },
  {
    path:'net-income',component:NetIncomeComponent
  },
  {
    path:'cagr',component:CagrComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorsRoutingModule { }
