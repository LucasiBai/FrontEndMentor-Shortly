import { Component, Input } from '@angular/core';
import { IconCardDataI } from '../../models/icon-card-data-i';

@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss'],
})
export class IconCardComponent {
  @Input() data!: IconCardDataI;
}
