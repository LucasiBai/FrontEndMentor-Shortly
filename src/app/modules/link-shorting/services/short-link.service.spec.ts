import { TestBed } from '@angular/core/testing';

import { ShortLinkService } from './short-link.service';
import { HttpClientModule } from '@angular/common/http';
import { DataI } from '../models/data-i';
import { first } from 'rxjs';
import { ShortedLinkI } from '../models/shorted-link-i';

describe('ShortLinkService', () => {
  let service: ShortLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ShortLinkService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Test shortedLinks Observer', () => {
    it('Should start empty', () => {
      service.shortedLinks
        .pipe(first())
        .subscribe((linkList: ShortedLinkI[]) => {
          expect(linkList.length).toEqual(0);
        });
    });

    it('Should can push a new link', () => {
      service.shortedLinks
        .pipe(first())
        .subscribe((linkList: ShortedLinkI[]) => {
          expect(linkList.length).toEqual(0);
        });
    });
  });

  describe('Test shortLink()', () => {
    it('Should return shorted link data', () => {
      const link = 'www.testlink.com.ar/test/short/link';

      service
        .shortLink(link)
        .pipe(first())
        .subscribe((data: DataI) => {
          expect(data.ok).toBeTrue();
          expect(data.result.short_link.length).toBeLessThan(link.length);
        });
    });
  });
});
