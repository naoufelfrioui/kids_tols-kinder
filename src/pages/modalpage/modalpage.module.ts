import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalpagePage } from './modalpage';

@NgModule({
  declarations: [
    ModalpagePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalpagePage),
  ],
  exports: [
    ModalpagePage
  ]
})
export class ModalpagePageModule {}
