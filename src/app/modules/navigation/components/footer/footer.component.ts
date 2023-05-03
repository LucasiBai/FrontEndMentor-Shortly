import { Component, Input } from '@angular/core';
import { LinkTreeI } from '../../models/link-tree-i';
import { SocialMediaI } from '../../models/social-media-i';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() links!: LinkTreeI[];
  @Input() socialMedia!: SocialMediaI[];
}
