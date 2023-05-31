import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectRoutingModule } from './select-routing.module';
import { SelectComponent } from './components/select/select.component';
import {IsapreDigitalModule} from 'isapre-digital';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    SelectRoutingModule,
    IsapreDigitalModule,
    SharedModule
  ]
})
export class SelectModule { }
