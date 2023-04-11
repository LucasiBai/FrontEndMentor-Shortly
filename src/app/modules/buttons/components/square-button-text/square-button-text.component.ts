import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square-button-text',
  templateUrl: './square-button-text.component.html',
  styleUrls: ['./square-button-text.component.scss'],
})
export class SquareButtonTextComponent implements OnInit {
  @Input() fill!: boolean;

  ngOnInit(): void {
    this.fill = this.fill ? this.fill : false;
  }
}
