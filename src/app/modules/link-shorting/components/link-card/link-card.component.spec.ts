import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { Clipboard } from '@angular/cdk/clipboard';

import { LinkCardComponent } from './link-card.component';
import { ShortedLinkI } from '../../models/shorted-link-i';
import { ButtonsModule } from 'src/app/modules/buttons/buttons.module';

const baseLink: ShortedLinkI = {
  id: 1,
  originalLink: 'www.testlink.com.ar/test/short/link',
  shortLink: 'short.ly',
};

fdescribe('LinkCardComponent', () => {
  let component: LinkCardComponent;
  let fixture: ComponentFixture<LinkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsModule],
      declarations: [LinkCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkCardComponent);
    component = fixture.componentInstance;
    component.linkData = baseLink;

    fixture.detectChanges();
  });

  it('Should render correctly', () => {
    expect(component).toBeTruthy();
  });

  it('Should contain copy button', () => {
    const copyButton =
      fixture.debugElement.nativeElement.querySelector('button');

    expect(copyButton).toBeTruthy();
    expect(copyButton.innerText).toEqual('Copy');
  });

  it('Should render original and shorted link', () => {
    const links = fixture.debugElement.nativeElement.querySelectorAll('li');

    expect(links[0].innerText).toEqual(baseLink.originalLink);
    expect(links[1].children[0].innerText).toEqual(baseLink.shortLink);
  });

  it("Should short link be a 'a' element that redirects to link", () => {
    const links = fixture.debugElement.nativeElement.querySelectorAll('li');

    expect(links[1].children[0].getAttribute('href')).toEqual(
      `https://${baseLink.shortLink}`
    );
    expect(links[1].children[0].getAttribute('target')).toEqual('_blank');
  });

  describe('Test copyLink()', () => {
    let clipboard: Clipboard;

    beforeEach(() => {
      clipboard = new Clipboard(document);
    });

    it("Should update button innerText to 'Copied!' for 3 seconds", fakeAsync(() => {
      component.copyLink();

      fixture.detectChanges();

      const copyButton =
        fixture.debugElement.nativeElement.querySelector('button');

      expect(copyButton).toBeTruthy();
      expect(copyButton.innerText).toEqual('Copied!');
      expect(copyButton.getAttribute('class')).toEqual('fill clicked');

      tick(1700);

      fixture.detectChanges();
      expect(copyButton.innerText).toEqual('Copy');
      expect(copyButton.getAttribute('class')).toEqual('fill');
    }));

    it('Should update navigator clipboard', () => {
      spyOn(clipboard, 'copy');
      component.copyLink();

      expect(clipboard.copy).toHaveBeenCalledWith(baseLink.shortLink);
    });
  });
});
