import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { NavigationBarComponent } from './navigation-bar.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavigationBarComponent],
  exports: [NavigationBarComponent]
})
export class NavigationBarModule { }
