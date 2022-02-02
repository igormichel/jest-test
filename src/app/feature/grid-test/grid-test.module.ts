import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridTestComponent } from './grid-test.component';
import { GridTestRoutingModule } from './grid-test-routing.module';

@NgModule({
  declarations: [
    GridTestComponent
  ],
  imports: [
    CommonModule,
    GridTestRoutingModule
  ]
})
export class GridTestModule { }
