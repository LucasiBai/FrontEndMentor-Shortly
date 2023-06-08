import { createReducer, on } from '@ngrx/store';

import {
  loadShortedLinks,
  loadedShortedLinks,
  shortLink,
  shortedLink,
} from '../actions/link-shorting.actions';

import { LinkStateI } from '../../models/link-state-i';

export const initialState: LinkStateI = { loading: false, links: [] };

export const linksReducer = createReducer(
  initialState,
  on(loadShortedLinks, (state) => ({ ...state, loading: true })),
  on(loadedShortedLinks, (state, { links }) => ({
    ...state,
    loading: false,
    links,
  }))
);
