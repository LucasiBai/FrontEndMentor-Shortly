import { Component, Input } from '@angular/core';
import { IconCardDataI } from '../../models/icon-card-data-i';

@Component({
  selector: 'app-icon-card-list',
  templateUrl: './icon-card-list.component.html',
  styleUrls: ['./icon-card-list.component.scss'],
})
export class IconCardListComponent {
  @Input() cardList!: IconCardDataI[];
}
