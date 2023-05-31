import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { DocumentComponent } from './components/document/document.component';
import {IsapreDigitalModule} from 'isapre-digital';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [DocumentComponent],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    IsapreDigitalModule,
    SharedModule
  ]
})
export class DocumentModule { }
