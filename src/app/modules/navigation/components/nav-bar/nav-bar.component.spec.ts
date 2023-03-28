import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should render component', () => {
    expect(component).toBeTruthy();
  });

  it("Should contain Shorly's logo", () => {
    const logo = fixture.debugElement.nativeElement.querySelector('img');

    expect(logo).toBeTruthy();
    expect(logo.getAttribute('src')).toEqual('./assets/images/logo.svg');
    expect(logo.getAttribute('alt')).toEqual('Shortly');
  });

  describe('Test mobile NavBar', () => {
    it('Should contain burger button', () => {
      const burgerButton =
        fixture.debugElement.nativeElement.querySelector('button');

      expect(burgerButton).toBeTruthy();
    });
  });
});
