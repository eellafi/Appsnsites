import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
 {path:"",redirectTo:"/signin",pathMatch:"full"},
  {path:"signup",component:SignupComponent},
  {path:"signin",component:SigninComponent},
  {path:"userslist",component:UsersComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
