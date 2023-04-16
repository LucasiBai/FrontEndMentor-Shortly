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
      const shortData: ShortedLinkI = {
        originalLink: 'www.testlink.com.ar/test/short/link',
        shortLink: 'short.ly',
      };

      service.addShortedLink = shortData;

      service.shortedLinks
        .pipe(first())
        .subscribe((linkList: ShortedLinkI[]) => {
          expect(linkList.length).toEqual(1);
          expect(linkList[0].id).toEqual(1);
          expect(linkList[0].originalLink).toEqual(shortData['originalLink']);
          expect(linkList[0].shortLink).toEqual(shortData['shortLink']);
        });
    });

    it('Should create id correctly', () => {
      const shortData: ShortedLinkI = {
        originalLink: 'www.testlink.com.ar/test/short/link',
        shortLink: 'short.ly',
      };

      service.addShortedLink = shortData;
      service.addShortedLink = shortData;
      service.addShortedLink = shortData;

      service.shortedLinks
        .pipe(first())
        .subscribe((linkList: ShortedLinkI[]) => {
          expect(linkList.length).toEqual(3);

          expect(linkList[0].id).toEqual(1);
          expect(linkList[1].id).toEqual(2);
          expect(linkList[2].id).toEqual(3);
        });
    });
  });

  describe('Test shortLink()', () => {
    it('Should return shorted link data list', () => {
      const link = 'www.testlink.com.ar/test/short/link';

      // service
      //   .shortLink(link)
      //   .pipe(first())
      //   .subscribe((data: ShortedLinkI[]) => {
      //     expect(data[0].short_link.length).toBeLessThan(link.length);
      //   });
    });
  });
});
