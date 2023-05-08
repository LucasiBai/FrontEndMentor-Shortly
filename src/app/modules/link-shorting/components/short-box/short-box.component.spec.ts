import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ShortBoxComponent } from './short-box.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'src/app/modules/buttons/buttons.module';
import { ShortLinkService } from '../../services/short-link.service';
import { ShortedLinkI } from '../../models/shorted-link-i';

const defaultLinks: ShortedLinkI[] = [
  {
    id: 0,
    originalLink: 'https://github.com/LucasiBai',
    shortLink: 'shrtco.de/TSLWEc',
  },
];

fdescribe('ShortBoxComponent', () => {
  let component: ShortBoxComponent;
  let fixture: ComponentFixture<ShortBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShortBoxComponent],
      imports: [ReactiveFormsModule, ButtonsModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ShortBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should render correctly', () => {
    expect(component).toBeTruthy();
  });

  it('Should contain input', () => {
    const input = fixture.debugElement.nativeElement.querySelector('input');
    const sendButton =
      fixture.debugElement.nativeElement.querySelector('button');

    expect(input).toBeTruthy();
    expect(sendButton).toBeTruthy();
  });

  describe('Test localData render', () => {
    let service: ShortLinkService;

    beforeEach(() => {
      localStorage.clear();
      service = TestBed.inject(ShortLinkService);
    });

    afterAll(() => {
      localStorage.clear();
    });

    it('Should render link-card', () => {
      const linkList =
        fixture.debugElement.nativeElement.querySelectorAll('app-link-card');

      expect(linkList).toBeTruthy();
    });
  });

  describe('Test Form Control', () => {
    it('Should contain validations', () => {
      const formGroup: FormGroup = component.initForm();

      expect(formGroup).toBeTruthy();
      expect(formGroup.controls['url']).toBeTruthy();
    });

    it('Should only accept links', () => {
      component.urlForm.setValue({
        url: 'Test invalid data',
      });
      component.urlForm.controls['url'].markAsTouched();

      fixture.detectChanges();
      const input = fixture.debugElement.nativeElement.querySelector('input');
      const errorLabel =
        fixture.debugElement.nativeElement.querySelector('label');

      expect(component.urlForm.valid).toBeFalse();
      expect(input.getAttribute('class')).toContain('invalid-input');
      expect(errorLabel.innerText).toEqual('Entered url is not valid');
    });

    it('Should validate if input is empty', () => {
      component.urlForm.setValue({
        url: '',
      });
      component.urlForm.controls['url'].markAsTouched();

      fixture.detectChanges();
      const input = fixture.debugElement.nativeElement.querySelector('input');
      const errorLabel =
        fixture.debugElement.nativeElement.querySelector('label');

      expect(component.urlForm.valid).toBeFalse();
      expect(input.getAttribute('class')).toContain('invalid-input');
      expect(errorLabel.innerText).toEqual('Please add a link');
    });

    it('Should accept correct link', () => {
      component.urlForm.setValue({
        url: 'https://github.com/LucasiBai',
      });

      expect(component.urlForm.valid).toBeTrue();
    });
  });

  describe('Test shortLink()', () => {
    let service: ShortLinkService;

    beforeEach(() => {
      localStorage.clear();
      service = TestBed.inject(ShortLinkService);
    });

    afterAll(() => {
      localStorage.clear();
    });

    it('Should short link', () => {
      component.urlForm.setValue({
        url: 'https://github.com/LucasiBai',
      });

      component.shortLink();

      service.shortedLinks.subscribe((links: ShortedLinkI[]) => {
        expect(links[0].originalLink).toEqual('https://github.com/LucasiBai');
        expect(component.lastestLinks).toEqual(links);
      });

      expect(component.urlForm.value['url']).toBeFalsy();
    });

    it('Should lastestLinks starts with shortedLinks data', () => {
      localStorage.setItem('links', JSON.stringify(defaultLinks));
      fixture.detectChanges();

      service.shortedLinks.subscribe((links: ShortedLinkI[]) =>
        expect(component.lastestLinks).toEqual(defaultLinks)
      );
    });
  });
});
