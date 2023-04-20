import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

import { Config } from '../config';
import { DataI } from '../models/data-i';
import { ShortedLinkI } from '../models/shorted-link-i';

const initData: ShortedLinkI[] = JSON.parse(
  localStorage.getItem(Config.tagName) || '[]'
);

@Injectable({
  providedIn: 'root',
})
export class ShortLinkService {
  constructor(private _http: HttpClient) {}

  private apiURL: string = Config.apiURL;
  private localTagName: string = Config.tagName;

  private shortLink$: BehaviorSubject<ShortedLinkI[]> = new BehaviorSubject<
    ShortedLinkI[]
  >(initData);

  public set addShortedLink(shortLink: ShortedLinkI) {
    const currentLinks: ShortedLinkI[] = [...this.shortLink$.value];

    const newId = currentLinks.length === 0 ? 1 : currentLinks.length + 1;

    const updatedData: ShortedLinkI[] = [
      ...currentLinks,
      { id: newId, ...shortLink },
    ];

    localStorage.setItem(this.localTagName, JSON.stringify(updatedData));
    this.shortLink$.next(updatedData);
  }

  public get shortedLinks(): Observable<ShortedLinkI[]> {
    return this.shortLink$.asObservable();
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
      .pipe(
        tap((response: ShortedLinkI) => {
          this.addShortedLink = response;
        })
      );
  }
}
