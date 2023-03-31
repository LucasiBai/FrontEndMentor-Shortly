import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { LinkI } from '../../models/link-i';

import { SidemenuComponent } from './sidemenu.component';

const links: LinkI[] = [
  { path: '/features', label: 'Features' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/resources', label: 'Resources' },
];

describe('Test Sidemenu', () => {
  let component: SidemenuComponent;
  let fixture: ComponentFixture<SidemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidemenuComponent],
      imports: [RouterModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SidemenuComponent);
    component = fixture.componentInstance;
    component.links = links;
    fixture.detectChanges();
  });

  it('Should render correctly', () => {
    expect(component).toBeTruthy();
  });

  it('Should render button', () => {
    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button).toBeTruthy();
  });

  it('Should contain entered links', () => {
    expect(component.links).toBeTruthy();

    const componentLinks =
      fixture.debugElement.nativeElement.querySelectorAll('a');

    expect(componentLinks.length).toEqual(links.length);
  });

  describe('Test showNav()', () => {
    it('Should show nav items in screen', () => {
      const hideNav = fixture.debugElement.nativeElement.querySelector('span');

      expect(hideNav.getAttribute('class')).not.toEqual('active');

      component.showNav();
      fixture.detectChanges();

      expect(hideNav.getAttribute('class')).toEqual('active');
    });

    it('Should hide nav items in screen if it is open', () => {
      const hideNav = fixture.debugElement.nativeElement.querySelector('span');

      component.showNav();
      fixture.detectChanges();
      expect(hideNav.getAttribute('class')).toEqual('active');

      component.showNav();
      fixture.detectChanges();
      expect(hideNav.getAttribute('class')).not.toEqual('active');
    });
  });
});
