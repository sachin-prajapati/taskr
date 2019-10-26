import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { VerificationComponent } from './verification/verification.component';


const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'login', component:LoginComponent },
  { path:'signup', component:SignupComponent },
  { path:'verify/:name', component:VerificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
