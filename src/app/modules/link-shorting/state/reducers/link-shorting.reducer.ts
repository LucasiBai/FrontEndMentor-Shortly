import { createReducer, on } from '@ngrx/store';

import {
  loadShortedLinks,
  loadedShortedLinks,
  shortLink,
  shortedLink,
} from '../actions/link-shorting.actions';
import { ShortedLinkI } from '../../models/shorted-link-i';

const savedLinks: ShortedLinkI[] = JSON.parse(
  localStorage.getItem('links') || '[]'
);

export const initialState: {
  loading: boolean;
  links: ReadonlyArray<ShortedLinkI>;
} = { loading: false, links: savedLinks };
