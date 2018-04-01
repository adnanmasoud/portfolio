
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AdnanModule } from './adnan/adnan.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AdnanModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
