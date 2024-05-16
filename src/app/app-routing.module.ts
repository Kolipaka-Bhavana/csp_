import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRountings=[
  HomeComponent,
  LoginComponent,
  RegistrationComponent,
  ContactusComponent,
  AboutusComponent

]
