import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyModule } from './empty/empty.module';
import { MainModule } from './main/main.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    EmptyModule,
    MainModule
  ]
})
export class LayoutModule { }
