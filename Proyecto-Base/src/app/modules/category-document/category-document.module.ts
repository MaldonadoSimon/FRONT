import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryDocumentRoutingModule } from './category-document-routing.module';
import { CategoryDocumentComponent } from './components/category/category-document.component';
import {IsapreDigitalModule} from 'isapre-digital';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [CategoryDocumentComponent],
    imports: [
        CommonModule,
        CategoryDocumentRoutingModule,
        IsapreDigitalModule,
        SharedModule
    ]
})
export class CategoryDocumentModule { }
