import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './components/calendar/calendar.component';
import {IsapreDigitalModule} from 'isapre-digital';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [CalendarComponent],
    imports: [
        CommonModule,
        CalendarRoutingModule,
        IsapreDigitalModule,
        SharedModule
    ]
})
export class CalendarModule { }
