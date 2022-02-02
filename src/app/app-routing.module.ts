import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  {
  path: "ui-lib-test",
  loadChildren: () =>
    import('./feature/ui-test/ui-test.module').then(m => m.UiTestModule)
},{
  path: "grid-lib-test",
  loadChildren: () =>
    import('./feature/grid-test/grid-test.module').then(m => m.GridTestModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
