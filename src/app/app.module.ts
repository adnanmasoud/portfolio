
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AdnanModule } from './adnan/adnan.module';
import { YazanComponent } from './yazan/yazan.component';

@NgModule({
  declarations: [
    AppComponent,
    YazanComponent
  ],
  imports: [
    BrowserModule, AdnanModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
