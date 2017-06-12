import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import {AngularFireModule} from 'angularfire2';
import { environment } from '../environments/environment';

import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';

import { AuthService } from './shared/services/auth.service';
import { AdminGuard } from './shared/guards/admin.guard';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    LoginModule,
    HomeModule,
    AdminModule
  ],
  providers: [AuthService, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
