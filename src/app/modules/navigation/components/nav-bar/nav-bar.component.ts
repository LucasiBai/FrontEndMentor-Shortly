import { Component } from '@angular/core';
import { LinkI } from '../../models/link-i';

const links: LinkI[] = [
  { path: '/features', label: 'Features' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/resources', label: 'Resources' },
];

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  links: LinkI[] = links;
}
