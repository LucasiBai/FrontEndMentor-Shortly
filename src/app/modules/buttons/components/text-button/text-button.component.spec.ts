import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextButtonComponent } from './text-button.component';
import { Component } from '@angular/core';

@Component({
  template: `<app-text-button>Testing Text</app-text-button>`,
})
class TestTextButtonComponent {}

describe('TextButtonComponent', () => {
  let component: TextButtonComponent;
  let fixture: ComponentFixture<TextButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestTextButtonComponent, TextButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should render correctly', () => {
    expect(component).toBeTruthy();
  });

  it('Should be auto fat', () => {
    expect(component.type).toEqual('fat');
  });

  describe('Test fat Text Button', () => {
    it("Should has button with 'fat' class", () => {
      const button = fixture.debugElement.nativeElement.querySelector('button');

      expect(button.getAttribute('class')).toEqual('fat');
    });
  });

  describe('Test large Text Button', () => {
    beforeEach(() => {
      component.type = 'large';
      fixture.detectChanges();
    });
    it("Should has button with 'large' class", () => {
      const button = fixture.debugElement.nativeElement.querySelector('button');

      expect(button.getAttribute('class')).toEqual('large');
    });
  });

  describe('Test ng content', () => {
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
    it('Should set button font size equal to entered value', async () => {
      const button = fixture.debugElement.nativeElement.querySelector('button');
      const startFontSize = parseInt(getComputedStyle(button).fontSize);

      const newFontSize = startFontSize - 4;
      component.fontSize = newFontSize;

      fixture.detectChanges();
      await fixture.whenStable();

      const updatedFontSize = parseInt(getComputedStyle(button).fontSize);

      expect(startFontSize).not.toEqual(updatedFontSize);
      expect(updatedFontSize).toEqual(newFontSize);
    });
  });
});
