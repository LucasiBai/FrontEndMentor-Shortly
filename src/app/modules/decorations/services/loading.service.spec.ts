import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should start being false', () => {
    service.isLoading.subscribe((isLoading: boolean) =>
      expect(isLoading).toBeFalse()
    );
  });

  describe('Test switchLoading()', () => {
    it('Should set isLoading to true', () => {
      service.switchLoading();
      service.isLoading.subscribe((isLoading: boolean) =>
        expect(isLoading).toBeTrue()
      );
    });

    it('Should set isLoading to false', () => {
      service.setLoading = true;

      service.switchLoading();

      service.isLoading.subscribe((isLoading: boolean) => {
        expect(isLoading).toBeFalse();
      });
    });
  });
});
