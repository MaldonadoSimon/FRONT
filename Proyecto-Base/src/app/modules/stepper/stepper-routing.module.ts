import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepperComponent } from './components/stepper/stepper.component';

const routes: Routes = [{ path: '', component: StepperComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepperRoutingModule { }
