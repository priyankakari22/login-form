import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChangeComponent } from'./change/change.component';
import { SuccessComponent } from './success/success.component';
import { FailComponent } from './fail/fail.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'pswd',
    component: ChangeComponent,
    data: { title: 'change password' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login Form' }
  },
  {
    path: 'succuss',
    component: SuccessComponent ,
    data: { title: 'success' }
  },
  {
    path: 'fail',
    component: FailComponent,
    data: { title: 'fail' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
