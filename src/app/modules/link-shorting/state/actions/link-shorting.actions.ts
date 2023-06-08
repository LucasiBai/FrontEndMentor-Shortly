import { createAction, props } from '@ngrx/store';

import { DataI } from '../../models/data-i';
import { ShortedLinkI } from '../../models/shorted-link-i';

export const shortLink = createAction('[Link Shorting] Short Link');

export const shortedLink = createAction(
  '[Link Shorting] Shorted Link Success',
  props<{ link: DataI }>()
);

export const loadShortedLinks = createAction(
  '[Link Shorting] Load Shorted Links'
);

export const loadedShortedLinks = createAction(
  '[Link Shorting] Loading Success',
  props<{ links: ShortedLinkI[] }>()
);
