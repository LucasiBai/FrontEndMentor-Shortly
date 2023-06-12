import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { ShortLinkService } from '../../services/short-link.service';
import { LoadingService } from 'src/app/modules/decorations/services/loading.service';
import {
  loadShortedLinks,
  loadedShortedLinks,
} from '../actions/link-shorting.actions';

@Injectable()
export class LinkShortingEffects {
  loadLinks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadShortedLinks().type),
      tap(() => {
        this._loader.setLoading = true;
      }),
      exhaustMap(() =>
        this._short.shortedLinks.pipe(
          map((links) => ({
            type: loadedShortedLinks['type'],
            links,
          })),
          tap(() => {
            this._loader.setLoading = false;
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private _short: ShortLinkService,
    private _loader: LoadingService
  ) {}
}
