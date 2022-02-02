import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiTestComponent } from './ui-test.component';

const routes: Routes = [
  {
    path: '',
    component: UiTestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiTestRoutingModule {}