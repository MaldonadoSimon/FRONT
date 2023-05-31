import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidateContacComponent } from './components/validate-contact/validate-contac.component';

const routes: Routes = [{ path: '', component: ValidateContacComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidateContacRoutingModule { }
