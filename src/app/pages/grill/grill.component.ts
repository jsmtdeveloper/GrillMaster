import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './grill.component.html',
  styleUrls: ['./grill.component.scss']
})
export class GrillComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('grill');
  }
}
