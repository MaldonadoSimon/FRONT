import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryDocumentComponent } from './components/category/category-document.component';

const routes: Routes = [{ path: '', component: CategoryDocumentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryDocumentRoutingModule { }
