import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { LoaderInterceptor } from './loader.interceptor';
import { LoadingService } from '../../decorations/services/loading.service';

describe('LoaderInterceptor', () => {
  let interceptor: LoaderInterceptor;
  let httpMock: HttpTestingController;
  let loadingServiceSpy: jasmine.SpyObj<LoadingService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('LoadingService', ['switchLoading']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LoaderInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoaderInterceptor,
          multi: true,
        },
        { provide: LoadingService, useValue: spy },
      ],
    });

    interceptor = TestBed.inject(LoaderInterceptor);
    httpMock = TestBed.inject(HttpTestingController);
    loadingServiceSpy = TestBed.inject(
      LoadingService
    ) as jasmine.SpyObj<LoadingService>;
  });

  it('should intercept and call switchLoading twice', fakeAsync(() => {
    const dummyUrl = 'https://example.com';
    const expectedResponse = { foo: 'bar' };
    const httpClient = TestBed.inject(HttpClient);

    httpClient.get(dummyUrl).subscribe((response) => {
      expect(response).toEqual(expectedResponse);
    });

    const httpRequest = httpMock.expectOne(dummyUrl);
    expect(httpRequest.request.method).toBe('GET');

    httpRequest.flush(expectedResponse);

    tick();

    expect(loadingServiceSpy.switchLoading).toHaveBeenCalledTimes(2);
  }));
});
