import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBoxComponent } from './short-box.component';

describe('ShortBoxComponent', () => {
  let component: ShortBoxComponent;
  let fixture: ComponentFixture<ShortBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShortBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShortBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should render correctly', () => {
    expect(component).toBeTruthy();
  });
});
