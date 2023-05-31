import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselRoutingModule } from './carousel-routing.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import {IsapreDigitalModule} from 'isapre-digital';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [CarouselComponent],
    imports: [
        CommonModule,
        CarouselRoutingModule,
        IsapreDigitalModule,
        SharedModule
    ]
})
export class CarouselModule { }
