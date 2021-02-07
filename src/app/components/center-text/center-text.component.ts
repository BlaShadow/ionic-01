import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-center-text',
  templateUrl: './center-text.component.html',
  styleUrls: ['./center-text.component.scss'],
})
export class CenterTextComponent implements OnInit {
  @Input() text: string;
  
  constructor() { }

  ngOnInit() {}

}
