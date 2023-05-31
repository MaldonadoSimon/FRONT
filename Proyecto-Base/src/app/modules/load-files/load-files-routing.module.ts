import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadFilesComponent } from './components/upload-files/load-files.component';

const routes: Routes = [{ path: '', component: LoadFilesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadFilesRoutingModule { }
