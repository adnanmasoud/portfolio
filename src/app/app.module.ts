
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { AppRoutingModule }     from './app-routing.module'


import { NavigationBarModule } from './navigation-bar/navigation-bar.module'
import { SingUpModule } from './sing-up/sing-up.module'
import { LoginModule } from './login/login.module'
import { AboutUsModule } from './about-us/about-us.module'
import { HomeModule } from './home/home.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationBarModule,
    SingUpModule,
    LoginModule,
    HomeModule,
    AboutUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
