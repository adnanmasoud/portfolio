import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingUpComponent } from './sing-up.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SingUpComponent],
  exports: [SingUpComponent]
})
export class SingUpModule { }
