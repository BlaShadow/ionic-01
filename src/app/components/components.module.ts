import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterTextComponent } from './center-text/center-text.component';
import { FieldContainerComponent } from './field-container/field-container.component';

const components = [
  CenterTextComponent,
  FieldContainerComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule
  ]
})

export class ComponentsModule { }
