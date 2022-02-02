import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridTestComponent } from './grid-test.component';

const routes: Routes = [
  {
    path: '',
    component: GridTestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridTestRoutingModule {}