import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

import { SocialMediaI } from '../../models/social-media-i';
import { LinkTreeI } from '../../models/link-tree-i';

const mockLinks: LinkTreeI[] = [
  {
    root: { label: 'Features', path: '/features' },
    children: [{ label: 'Link Shortening', path: '/features/link-short' }],
  },

  {
    root: { label: 'Features', path: '/features' },
    children: [{ label: 'Link Shortening', path: '/features/link-short' }],
  },
];

const mockSocialMedia: SocialMediaI[] = [
  {
    icon: '../../../../assets/images/icon-twitter.svg',
    href: 'https://www.twitter.com',
  },
  {
    icon: '../../../../assets/images/icon-twitter.svg',
    href: 'https://www.twitter.com',
  },
];

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should render correctly', () => {
    expect(component).toBeTruthy();
  });

  describe('Test Links', () => {});

  describe('Test socialMedia', () => {});
});
