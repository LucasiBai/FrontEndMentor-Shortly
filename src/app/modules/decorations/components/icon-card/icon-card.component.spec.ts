import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCardComponent } from './icon-card.component';
import { IconCardDataI } from '../../models/icon-card-data-i';

const mockData: IconCardDataI = {
  header: 'Test Header data',
  content: 'Test Content data',
  icon: '../../../../assets/images/icon-detailed-records.svg',
};

fdescribe('IconCardComponent', () => {
  let component: IconCardComponent;
  let fixture: ComponentFixture<IconCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconCardComponent);
    component = fixture.componentInstance;
    component.data = mockData;
    fixture.detectChanges();
  });

  it('Should render correctly', () => {
    expect(component).toBeTruthy();
  });

  it('Should contain card data', () => {
    const image = fixture.debugElement.nativeElement.querySelector('img');
    const header = fixture.debugElement.nativeElement.querySelector('h4');
    const content = fixture.debugElement.nativeElement.querySelector('p');

    expect(image.getAttribute('src')).toEqual(mockData.icon);
    expect(image.getAttribute('alt')).toEqual(mockData.header);

    expect(header.innerText).toEqual(mockData.header);

    expect(content.innerText).toEqual(mockData.content);
  });

  describe('Test number input', () => {
    it('Should be auto 1 value', () => {
      const spaces =
        fixture.debugElement.nativeElement.querySelectorAll('.blank-space');

      expect(spaces.length).toBeFalsy();
      expect(component.number).toEqual(1);
    });

    it("Should render 3 'blank-space' div", () => {
      component.number = 4;
      fixture.detectChanges();

      const spaces =
        fixture.debugElement.nativeElement.querySelectorAll('.blank-space');

      expect(spaces.length).toEqual(3);
    });
  });
});
