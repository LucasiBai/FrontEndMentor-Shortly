import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShortedLinkI } from '../../models/shorted-link-i';
import { assert } from 'ts-essentials';
import { Store } from '@ngrx/store';
import {
  loadShortedLinks,
  loadedShortedLinks,
} from '../../state/actions/link-shorting.actions';
import { Observable } from 'rxjs';
import {
  selectListLinks,
  selectLoadingLinks,
} from '../../state/selectors/link-shorting.selectors';
import { LoadingService } from 'src/app/modules/decorations/services/loading.service';
import { ShortLinkService } from '../../services/short-link.service';

@Component({
  selector: 'app-short-box',
  templateUrl: './short-box.component.html',
  styleUrls: ['./short-box.component.scss'],
})
export class ShortBoxComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private _store: Store<any>,
    private _loader: LoadingService,
    private _short: ShortLinkService
  ) {}

  urlForm!: FormGroup;

  errors: {
    [key: string]: string;
  } = {
    required: 'Please add a link',
    pattern: 'Please enter a valid url',
    error: 'Something went wrong, please enter a valid url',
  };

  lastestLinks: ShortedLinkI[] = [];

  loading$!: Observable<boolean>;

  ngOnInit(): void {
    this.urlForm = this.initForm();

    this._store.select(selectListLinks).subscribe((links: any) => {
      this.lastestLinks = links.reverse();
    });

    this._store
      .select(selectLoadingLinks)
      .subscribe((isLoading: boolean) => (this._loader.setLoading = isLoading));

    this._store.dispatch(loadShortedLinks());

    this._short.shortedLinks.subscribe((links: ShortedLinkI[]) => {
      this._store.dispatch(loadedShortedLinks({ links: links }));
    });
  }

  initForm(): FormGroup {
    return this._fb.group({
      url: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(http|https)://[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$'
          ),
        ],
      ],
    });
  }

  shortLink(): void {
    this.urlForm.controls['url'].markAsTouched();
    assert(this.urlForm.valid);

    const link = this.urlForm.value['url'];

    // this._short.shortLink(link).subscribe(
    //   (link: ShortedLinkI) => {
    //     this.urlForm = this.initForm();
    //   },
    //   (error) => {
    //     this.urlForm.get('url')?.setErrors({ error: true });
    //   }
    // );
  }

  getErrorMessage(): string {
    const error = Object.keys(this.urlForm.get('url')?.errors || {})[0];

    console.log(error);
    return this.errors[error];
  }
}
