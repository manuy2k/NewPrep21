import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjshomeComponent } from './rxjshome/rxjshome.component';

const routes: Routes = [
  {
    path: 'rxjsh',
    component: RxjshomeComponent
  }
];

@NgModule({
  declarations: [RxjshomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RxjsOperatorsModule { }
