import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'calculators',
    loadChildren: () =>
      import('./calculators/calculators-routing.module').then(
        (mod) => mod.CalculatorsRoutingModule
      ),

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
