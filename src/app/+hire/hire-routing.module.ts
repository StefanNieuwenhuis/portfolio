import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HireComponent } from './hire.component';

const routes: Routes = [{ path: '', component: HireComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HireRoutingModule { }
