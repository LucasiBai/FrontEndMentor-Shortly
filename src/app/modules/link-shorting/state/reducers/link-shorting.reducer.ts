import { createReducer, on } from '@ngrx/store';

import {
  loadShortedLinks,
  loadedShortedLinks,
  shortLink,
  shortedLink,
} from '../actions/link-shorting.actions';
import { ShortedLinkI } from '../../models/shorted-link-i';
import { Config } from '../../config';
import { LinkStateI } from '../../models/link-state-i';

const savedLinks: ShortedLinkI[] = JSON.parse(
  localStorage.getItem(Config.tagName) || '[]'
);

export const initialState: LinkStateI = { loading: false, links: savedLinks };

export const linksReducer = createReducer(
  initialState,
  on(loadShortedLinks, (state) => ({ ...state, loading: true }))
);
