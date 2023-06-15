import { ActionReducerMap } from '@ngrx/store';
import { LinkStateI } from '../models/link-state-i';
import { linksReducer } from './reducers/link-shorting.reducer';

export interface LinkShortingState {
  links: LinkStateI;
}

export const ROOT_REDUCERS: ActionReducerMap<LinkShortingState> = {
  links: linksReducer,
};
