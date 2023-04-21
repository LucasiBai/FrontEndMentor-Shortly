import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCardComponent } from './link-card.component';

describe('LinkCardComponent', () => {
  let component: LinkCardComponent;
  let fixture: ComponentFixture<LinkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkCardComponent);
    component = fixture.componentInstance;
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

  describe('Test copyLink()', () => {
    it("Should update button innerText to 'Copied!'", () => {
      component.copyLink();

      fixture.detectChanges();

      const copyButton =
        fixture.debugElement.nativeElement.querySelector('button');

      expect(copyButton).toBeTruthy();
      expect(copyButton.innerText).toEqual('Copied!');
    });
  });
});
