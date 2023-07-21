import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RestritoComponent } from './restrito/restrito.component';
import { GuardGuard } from './guard.guard';

const routes: Routes = [
  {path:'inicio', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'restrito',component: RestritoComponent, canActivate: [GuardGuard]},
  {path:'', redirectTo:'/inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
