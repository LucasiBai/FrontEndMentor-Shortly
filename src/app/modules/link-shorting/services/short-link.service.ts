import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Config } from '../config';
import { DataI } from '../models/data-i';

@Injectable({
  providedIn: 'root',
})
export class ShortLinkService {
  constructor(private _http: HttpClient) {}

  private apiURL: string = Config.apiURL;

  public shortLink(link: string): Observable<DataI> {
    return this._http.get<DataI>(`${this.apiURL}/shorten?url=${link}`);
  }
}
