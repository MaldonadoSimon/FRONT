import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTextComponent } from './components/dynamic-text/dynamic-text.component';
import { IsapreDigitalModule } from 'isapre-digital';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2Rut } from 'ng2-rut';
import { SecureDomPipe } from './pipes/secure-dom.pipe';
import { MxdevComponent } from './components/mxdev/mxdev.component';

@NgModule({
  declarations: [
    DynamicTextComponent,
    SecureDomPipe,
    MxdevComponent
  ],
  imports: [
    CommonModule,
    IsapreDigitalModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2Rut,
  ],
  exports: [
    DynamicTextComponent,
    IsapreDigitalModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2Rut,
    MxdevComponent,
  ]
})
export class SharedModule { }
