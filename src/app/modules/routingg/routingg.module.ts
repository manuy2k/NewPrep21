import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutehomeComponent } from './routehome/routehome.component';

const routes: Routes = [
  {
    path: 'routingHome',
    component: RoutehomeComponent
  }
];

@NgModule({
  declarations: [RoutehomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoutinggModule { }
