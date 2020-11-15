// Below is importing the Angular modules for use

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// In the section below, add newly generated components to be 
// dealt with by the routing module.

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


// To be routed, the path and component needs to be added to the 
// Routes Array below.

const routes: Routes = [

{path: 'login', component: LoginComponent},
{path: 'home' , component: HomeComponent},
{path: 'about' , component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
