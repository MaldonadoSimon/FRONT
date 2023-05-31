import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperRoutingModule } from './stepper-routing.module';
import { StepperComponent } from './components/stepper/stepper.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [StepperComponent],
    imports: [
        CommonModule,
        StepperRoutingModule,
        SharedModule
    ]
})
export class StepperModule { }
