import { ShortedLinkI } from './shorted-link-i';

export interface LinkStateI {
  loading: boolean;
  links: ReadonlyArray<ShortedLinkI>;
}
