import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'compCom',
    loadChildren: './modules/comp-com/comp-com.module#CompComModule'
  },
  {
    path: 'dide',
    loadChildren: './modules/direc-decors/direc-decors.module#DirecDecorsModule'
  },
  {
    path:'routeHome',
    loadChildren: './modules/routingg/routingg.module#RoutinggModule'
  },
  {
    path:'rxjsHome',
    loadChildren: './modules/rxjsops/rxjsops.module#RxjsopsModule'
  },
  {
    path:" ",
    component: LandingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
