import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginatorRoutingModule } from './paginator-routing.module';
import { PaginatorComponent } from './components/paginator/paginator.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [PaginatorComponent],
    imports: [
        CommonModule,
        PaginatorRoutingModule,
        SharedModule
    ]
})
export class PaginatorModule { }
