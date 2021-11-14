import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartphoneRoutingModule } from './smartphone-routing.module';
import { SmartphoneComponent } from './smartphone.component';


@NgModule({
  declarations: [
    SmartphoneComponent
  ],
  imports: [
    CommonModule,
    SmartphoneRoutingModule
  ]
})
export class SmartphoneModule { }
