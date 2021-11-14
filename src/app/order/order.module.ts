import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrderComponent } from './list-order/list-order.component';



@NgModule({
  declarations: [
    ListOrderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListOrderComponent
  ]
})
export class OrderModule { }
