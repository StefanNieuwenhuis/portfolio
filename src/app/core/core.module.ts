import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavComponent],
  declarations: [NavComponent]
})
export class CoreModule { }
