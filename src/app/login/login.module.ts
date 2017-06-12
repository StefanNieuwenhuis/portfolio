import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [AngularFireAuth]
})
export class LoginModule { }
