import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabFormRegistroComponent } from './datab-form-registro/datab-form-registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DatabFormRegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DatabFormRegistroComponent
  ]
})
export class PrincipalModule { }
