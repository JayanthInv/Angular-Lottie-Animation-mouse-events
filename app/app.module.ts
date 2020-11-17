import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LottieAnimationViewModule } from 'ng-lottie';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, LottieAnimationViewModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
