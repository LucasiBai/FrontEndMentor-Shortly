import { Component, Input, OnInit } from '@angular/core';
import { IconCardDataI } from '../../models/icon-card-data-i';

@Component({
  selector: 'app-icon-card-list',
  templateUrl: './icon-card-list.component.html',
  styleUrls: ['./icon-card-list.component.scss'],
})
export class IconCardListComponent implements OnInit {
  @Input() cardListData!: IconCardDataI[];

  ngOnInit(): void {
    this.cardListData = this.cardListData ? this.cardListData : [];
  }
}
