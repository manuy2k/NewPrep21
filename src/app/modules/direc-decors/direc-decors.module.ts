import { DidehomeComponent } from './didehome/didehome.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path:'dideHome',
    component: DidehomeComponent
  }
];

@NgModule({
  declarations: [DidehomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DirecDecorsModule { }
