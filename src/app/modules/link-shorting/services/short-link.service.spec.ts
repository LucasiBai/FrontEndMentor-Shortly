import { TestBed } from '@angular/core/testing';

import { ShortLinkService } from './short-link.service';
import { HttpClientModule } from '@angular/common/http';
import { first } from 'rxjs';
import { ShortedLinkI } from '../models/shorted-link-i';

const defaultLinks: ShortedLinkI[] = [
  {
    id: 0,
    originalLink: 'https://github.com/LucasiBai',
    shortLink: 'shrtco.de/TSLWEc',
  },
];

describe('ShortLinkService', () => {
  let service: ShortLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ShortLinkService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Test shortedLinks Observer', () => {
    beforeEach(() => {
      localStorage.clear();
    });

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

    describe('Test localStorage store', () => {
      beforeEach(() => {
        localStorage.setItem('links', JSON.stringify(defaultLinks));
      });

      it('Should start with localStorage data', () => {
        const localData: ShortedLinkI[] = JSON.parse(
          localStorage.getItem('links') || '[]'
        );

        service.shortedLinks
          .pipe(first())
          .subscribe((links: ShortedLinkI[]) =>
            expect(links[0]).toEqual(localData[0])
          );
      });

      it('Should update localStorage in link creation', () => {
        const shortData: ShortedLinkI = {
          originalLink: 'www.testlink.com.ar/test/short/link',
          shortLink: 'short.ly',
        };

        service.addShortedLink = shortData;

        const localData: ShortedLinkI[] = JSON.parse(
          localStorage.getItem('links') || '[]'
        );

        expect(localData[0].originalLink).toEqual(shortData.originalLink);
        expect(localData[0].shortLink).toEqual(shortData.shortLink);
      });
    });
  });

  // describe('Test shortLink()', () => {
  //   beforeEach(() => localStorage.clear());

  //   it('Should return shorted link data list', () => {
  //     service.shortedLinks.subscribe((links: ShortedLinkI[]) =>
  //       expect(links.length).toBeFalsy()
  //     );

  //     const link = 'www.testlink.com.ar/test/short/link';

  //     service
  //       .shortLink(link)
  //       .pipe(first())
  //       .subscribe((data: ShortedLinkI) => {
  //         expect(data.shortLink.length).toBeLessThan(link.length);

  //         service.shortedLinks.subscribe((links: ShortedLinkI[]) => {
  //           expect(links.length).toBeTruthy();
  //         });
  //       });
  //   });
  // });
});
