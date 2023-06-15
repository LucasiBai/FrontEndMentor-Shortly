import { createReducer, on } from '@ngrx/store';

import {
  addShortedLink,
  loadShortedLinks,
  loadedShortedLinks,
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
  })),
  on(addShortedLink, (state, link) => ({
    loading: false,
    links: [...state.links.slice(-2), link],
  }))
);
