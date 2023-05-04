import { Component, Input } from '@angular/core';
import { LinkTreeI } from '../../models/link-tree-i';
import { SocialMediaI } from '../../models/social-media-i';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  links: LinkTreeI[] = [
    {
      root: { label: 'Features', path: '/features' },
      children: [
        { label: 'Link Shortening', path: '/features/link-short' },

        { label: 'Branded Links', path: '/features/branded-links' },

        { label: 'Analytics', path: '/features/link-short' },
      ],
    },

    {
      root: { label: 'Resources', path: '/resources' },
      children: [
        { label: 'Blog', path: '/resources/blog' },

        { label: 'Developers', path: '/resources/developers' },

        { label: 'Support', path: '/resources/support' },
      ],
    },

    {
      root: { label: 'Company', path: '/company' },
      children: [
        { label: 'About', path: '/company/about' },

        { label: 'Our Team', path: '/company/team' },

        { label: 'Careers', path: '/company/careers' },

        { label: 'Contact', path: '/company/contact' },
      ],
    },
  ];

  socialMedia: SocialMediaI[] = [
    {
      media: 'facebook',
      icon: '../../../../assets/images/icon-facebook.svg',
      href: 'https://www.facebook.com',
    },
    {
      media: 'twitter',
      icon: '../../../../assets/images/icon-twitter.svg',
      href: 'https://www.twitter.com',
    },
    {
      media: 'pinterest',
      icon: '../../../../assets/images/icon-pinterest.svg',
      href: 'https://www.pinterest.com',
    },
    {
      media: 'instagram',
      icon: '../../../../assets/images/icon-instagram.svg',
      href: 'https://www.instagram.com',
    },
  ];
}
