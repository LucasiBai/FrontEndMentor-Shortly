import { Component, Input } from '@angular/core';
import { ShortedLinkI } from '../../models/shorted-link-i';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss'],
})
export class LinkCardComponent {
  constructor(private _clipboard: Clipboard) {}

  @Input() linkData!: ShortedLinkI;

  copied: boolean = false;

  copyLink(): void {
    this.copied = true;
    this._clipboard.copy(this.linkData.shortLink);

    setTimeout(() => {
      this.copied = false;
    }, 3000);
  }
}
