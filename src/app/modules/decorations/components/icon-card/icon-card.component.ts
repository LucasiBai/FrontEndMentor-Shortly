import { Component, Input, OnInit } from '@angular/core';
import { IconCardDataI } from '../../models/icon-card-data-i';
import { assert } from 'ts-essentials';

@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss'],
})
export class IconCardComponent implements OnInit {
  @Input() data!: IconCardDataI;
  @Input() number!: number;

  ngOnInit(): void {
    this.number = this.number ? this.number : 1;
    assert(this.number > 0);
  }

  getRange(num: number): number[] {
    return Array(num)
      .fill(0)
      .map((_, index) => index + 1);
  }
}
