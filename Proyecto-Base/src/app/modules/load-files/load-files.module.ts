import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadFilesRoutingModule } from './load-files-routing.module';
import { LoadFilesComponent } from './components/upload-files/load-files.component';
import {IsapreDigitalModule} from 'isapre-digital';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [LoadFilesComponent],
    imports: [
        CommonModule,
        LoadFilesRoutingModule,
        IsapreDigitalModule,
        SharedModule
    ]
})
export class LoadFilesModule { }
