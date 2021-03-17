import { MatModuleModule } from './../mat-module/mat-module.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjshomeComponent } from './rxjshome/rxjshome.component';

const routes: Routes = [
{
  path:'rxjslaunch',
  component: RxjshomeComponent
}
];

@NgModule({
  declarations: [RxjshomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatModuleModule
  ]
})
export class RxjsopsModule { }
