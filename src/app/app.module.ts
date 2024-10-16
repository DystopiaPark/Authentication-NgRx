import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import authReducer from './Redux/store/reducers/authentication.reducers';
import { EffectsModule } from '@ngrx/effects';
import AuthenticationEffect from './Redux/store/effects/authentication.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forRoot({ authStore: authReducer }),
    EffectsModule.forRoot([AuthenticationEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
