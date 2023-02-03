import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InterpolacionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InterpolacionComponent,
  ]
})
export class PrincipalModule { }
