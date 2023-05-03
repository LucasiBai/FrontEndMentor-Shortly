import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

import { SocialMediaI } from '../../models/social-media-i';
import { LinkTreeI } from '../../models/link-tree-i';
import { AppRoutingModule } from 'src/app/app-routing.module';

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
    media: 'twitter',
    icon: '../../../../assets/images/icon-twitter.svg',
    href: 'https://www.twitter.com',
  },
  {
    media: 'twitter',
    icon: '../../../../assets/images/icon-twitter.svg',
    href: 'https://www.twitter.com',
  },
];

fdescribe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should render correctly', () => {
    expect(component).toBeTruthy();
  });

  describe('Test Links', () => {
    beforeEach(() => {
      component.links = mockLinks;
      fixture.detectChanges();
    });

    it('Should render links', () => {
      const links: any =
        fixture.debugElement.nativeElement.querySelectorAll('.root-link');

      expect(links.length).toEqual(mockLinks.length);

      expect(links[0].children[0].innerText).toEqual(mockLinks[0].root.label);
      expect(links[0].children[1].children[0].innerText).toEqual(
        mockLinks[0].children[0].label
      );

      expect(links[1].children[0].innerText).toEqual(mockLinks[1].root.label);
      expect(links[1].children[1].children[0].innerText).toEqual(
        mockLinks[1].children[0].label
      );
    });
  });

  describe('Test socialMedia', () => {
    beforeEach(() => {
      component.socialMedia = mockSocialMedia;
      fixture.detectChanges();
    });
    it('Should render media links correctly', () => {
      const mediaLinks: any =
        fixture.debugElement.nativeElement.querySelectorAll('.media-link');

      expect(mediaLinks.length).toEqual(mockSocialMedia.length);

      expect(mediaLinks[0].children[0].getAttribute('href')).toEqual(
        mockSocialMedia[0].href
      );
      expect(mediaLinks[0].children[0].children[0].getAttribute('alt')).toEqual(
        mockSocialMedia[0].media
      );
      expect(mediaLinks[0].children[0].children[0].getAttribute('src')).toEqual(
        mockSocialMedia[0].icon
      );

      expect(mediaLinks[1].children[0].getAttribute('href')).toEqual(
        mockSocialMedia[1].href
      );
      expect(mediaLinks[0].children[0].children[0].getAttribute('alt')).toEqual(
        mockSocialMedia[1].media
      );
      expect(mediaLinks[1].children[0].children[0].getAttribute('src')).toEqual(
        mockSocialMedia[1].icon
      );
    });
  });
});
