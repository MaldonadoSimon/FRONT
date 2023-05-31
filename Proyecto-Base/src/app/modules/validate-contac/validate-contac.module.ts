import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidateContacRoutingModule } from './validate-contac-routing.module';
import { ValidateContacComponent } from './components/validate-contact/validate-contac.component';
import {IsapreDigitalModule} from 'isapre-digital';


@NgModule({
  declarations: [ValidateContacComponent],
  imports: [
    CommonModule,
    ValidateContacRoutingModule,
    IsapreDigitalModule
  ]
})
export class ValidateContacModule { }
