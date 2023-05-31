import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipRoutingModule } from './tooltip-routing.module';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [TooltipComponent],
    imports: [
        CommonModule,
        TooltipRoutingModule,
        SharedModule
    ]
})
export class TooltipModule { }
