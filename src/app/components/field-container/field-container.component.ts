import { Component, OnInit } from '@angular/core';

export type FieldContainerIconName = 'lock-closed-outline' | 'mail-outline';

@Component({
  selector: 'app-field-container',
  templateUrl: './field-container.component.html',
  styleUrls: ['./field-container.component.scss'],
})
export class FieldContainerComponent implements OnInit {
  name: FieldContainerIconName;
  constructor() { }

  ngOnInit() {}

}
