import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SingUpComponent } from './sing-up/sing-up.component'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { AboutUsComponent } from './about-us/about-us.component'


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'singup', component: SingUpComponent },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }