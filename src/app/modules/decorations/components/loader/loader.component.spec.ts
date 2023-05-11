import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';
import { LoadingService } from '../../services/loading.service';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should render correctly', () => {
    const loader = fixture.debugElement.nativeElement.querySelector('.loader');

    expect(component).toBeTruthy();

    expect(loader).toBeFalsy();
  });

  describe('Test loader render', () => {
    let service: LoadingService;

    beforeEach(() => {
      service = TestBed.inject(LoadingService);
    });

    it('Should render when service isLoading', () => {
      service.switchLoading();

      fixture.detectChanges();

      const loader =
        fixture.debugElement.nativeElement.querySelector('.loader');

      expect(loader).toBeTruthy();
    });

    it("Shouldn't render loader if it's not isLoading", () => {
      service.setLoading = true;
      service.switchLoading();

      const loader =
        fixture.debugElement.nativeElement.querySelector('.loader');

      expect(loader).toBeFalsy();
    });
  });
});
