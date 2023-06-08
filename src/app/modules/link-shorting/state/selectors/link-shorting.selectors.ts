import { createSelector } from '@ngrx/store';

import { LinkShortingState } from '../link-shorting.state';
import { LinkStateI } from '../../models/link-state-i';

export const selectLinksFeature = (state: LinkShortingState) => state.links;

export const selectListLinks = createSelector(
  selectLinksFeature,
  (state: LinkStateI) => state.links
);

export const selectLoadingLinks = createSelector(
  selectLinksFeature,
  (state: LinkStateI) => state.loading
);
