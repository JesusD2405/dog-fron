import { NgModule } from '@angular/core';

// Mock Repository
import { MockModule } from './repository/mock/mock.module';

@NgModule({
  imports: [
    MockModule
  ],
  declarations: [ ],
  exports: [ ]
})
export class DataModule { }