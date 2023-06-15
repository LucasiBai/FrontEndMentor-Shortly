import { createAction, props } from '@ngrx/store';

import { ShortedLinkI } from '../../models/shorted-link-i';

export const shortLink = createAction('[Link Shorting] Short Link');

export const loadShortedLinks = createAction(
  '[Link Shorting] Load Shorted Links'
);

export const loadedShortedLinks = createAction(
  '[Link Shorting] Loading Success',
  props<{ links: ReadonlyArray<ShortedLinkI> }>()
);

export const addShortedLink = createAction(
  '[Link Shorting] Add Shorted Link',
  props<ShortedLinkI>()
);
