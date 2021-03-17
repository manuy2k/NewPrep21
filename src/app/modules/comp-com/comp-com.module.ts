import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComphomeComponent } from './comphome/comphome.component';

const routes: Routes = [
  {
    path: 'compHome',
    component: ComphomeComponent
  }
]
@NgModule({
  declarations: [ComphomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CompComModule { }
