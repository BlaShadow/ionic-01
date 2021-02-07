import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterTextComponent } from './center-text/center-text.component';

const components = [
  CenterTextComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule
  ]
})

export class ComponentsModule { }
