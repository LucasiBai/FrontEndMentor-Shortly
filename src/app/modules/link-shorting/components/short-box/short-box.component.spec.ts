import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBoxComponent } from './short-box.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ShortBoxComponent', () => {
  let component: ShortBoxComponent;
  let fixture: ComponentFixture<ShortBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShortBoxComponent],
      imports: [ReactiveFormsModule],
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
      const form = component.initForm();
      // TODO: Complete test
    });
  });
});
