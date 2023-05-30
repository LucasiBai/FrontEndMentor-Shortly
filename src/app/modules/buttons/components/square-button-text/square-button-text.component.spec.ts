import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareButtonTextComponent } from './square-button-text.component';
import { Component } from '@angular/core';

@Component({
  template: `<app-square-button-text>Testing Text</app-square-button-text>`,
})
class TestTextButtonComponent {}

fdescribe('SquareButtonTextComponent', () => {
  let component: SquareButtonTextComponent;
  let fixture: ComponentFixture<SquareButtonTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SquareButtonTextComponent, TestTextButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SquareButtonTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should render correctly', () => {
    expect(component).toBeTruthy();
  });

  it('Should be a button element', () => {
    const button = fixture.debugElement.nativeElement.querySelector('span');

    expect(button).toBeTruthy();
    expect(button.getAttribute('class')).not.toEqual('fill');
  });

  describe('Test clicked button', () => {
    beforeEach(() => {
      component.clicked = true;
      fixture.detectChanges();
    });

    it("Should has button with 'clicked' class", () => {
      const button = fixture.debugElement.nativeElement.querySelector('button');

      expect(button.getAttribute('class')).toEqual('clicked');
    });
  });

  describe('Test fill button', () => {
    beforeEach(() => {
      component.fill = true;
      fixture.detectChanges();
    });

    it("Should has button with 'fill' class", () => {
      const button = fixture.debugElement.nativeElement.querySelector('span');

      expect(button.getAttribute('class')).toEqual('fill');
    });
  });

  describe('Test ngContent', () => {
    let component: TestTextButtonComponent;
    let fixture: ComponentFixture<TestTextButtonComponent>;

    beforeEach(() => {
      fixture = TestBed.createComponent(TestTextButtonComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('Should render children text', () => {
      const button = fixture.debugElement.nativeElement.querySelector('button');

      expect(button.innerText).toEqual('Testing Text');
    });
  });

  describe('Test fontSize value', () => {
    it('Should set button font size equal to entered value', () => {
      const button = fixture.debugElement.nativeElement.querySelector('button');
      const startFontSize = parseInt(getComputedStyle(button).fontSize);

      const newFontSize = startFontSize - 4;
      component.fontSize = newFontSize;

      fixture.detectChanges();

      const updatedButton =
        fixture.debugElement.nativeElement.querySelector('button');
      const updatedFontSize = parseInt(
        getComputedStyle(updatedButton).fontSize
      );

      expect(startFontSize).not.toEqual(updatedFontSize);

      expect(updatedFontSize).toEqual(newFontSize);
    });
  });
});
