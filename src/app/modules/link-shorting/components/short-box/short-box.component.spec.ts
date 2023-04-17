import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBoxComponent } from './short-box.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'src/app/modules/buttons/buttons.module';

describe('ShortBoxComponent', () => {
  let component: ShortBoxComponent;
  let fixture: ComponentFixture<ShortBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShortBoxComponent],
      imports: [ReactiveFormsModule, ButtonsModule],
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

      expect(component.urlForm.valid).toBeFalse();
    });

    it('Should accept correct link', () => {
      component.urlForm.setValue({
        url: 'https://github.com/LucasiBai',
      });

      expect(component.urlForm.valid).toBeTrue();
    });

    it('Should validate if input is empty', () => {
      component.urlForm.setValue({
        url: '',
      });

      expect(component.urlForm.valid).toBeFalse();
    });
  });

  describe('Test shortLink()', () => {
    it('Should short link', () => {
      component.urlForm.setValue({
        url: 'https://github.com/LucasiBai',
      });

      component.shortLink();
      
      // TODO: Complete Test
    });
  });
});
