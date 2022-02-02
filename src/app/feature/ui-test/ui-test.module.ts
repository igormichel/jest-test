import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTestComponent } from './ui-test.component';
import { UiTestRoutingModule } from './ui-test-routing.module';
import { SpinnerModule } from '@itsg/ui';

@NgModule({
  declarations: [UiTestComponent],
  imports: [CommonModule, UiTestRoutingModule, SpinnerModule],
})
export class UiTestModule {}
