import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, first, map, of, tap } from 'rxjs';

import { Config } from '../config';
import { DataI } from '../models/data-i';
import { ShortedLinkI } from '../models/shorted-link-i';

const initData: ShortedLinkI[] = JSON.parse(
  localStorage.getItem(Config.tagName) ||
    '	[{"id":1,"originalLink":"https://www.github.com/lucasibai","shortLink":"shrtco.de/CsL7sK"}]'
);

@Injectable({
  providedIn: 'root',
})
export class ShortLinkService {
  constructor(private _http: HttpClient) {}

  private apiURL: string = Config.apiURL;
  private localTagName: string = Config.tagName;

  public get shortedLinks(): Observable<ShortedLinkI[]> {
    const shortedLinks = initData;

    return of(shortedLinks).pipe(first(), delay(300));
  }

  public shortLink(link: string): Observable<ShortedLinkI> {
    return this._http
      .get<DataI>(`${this.apiURL}/shorten?url=${link}`)
      .pipe(
        map(
          (response: DataI): ShortedLinkI => ({
            originalLink: response.result.original_link,
            shortLink: response.result.short_link,
          })
        )
      )
      .pipe
      // tap((response: ShortedLinkI) => {
      //   this.addShortedLink = response;
      // })
      ();
  }
}
