import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShortedLinkI } from '../../models/shorted-link-i';
import { assert } from 'ts-essentials';
import { Store } from '@ngrx/store';
import { loadShortedLinks } from '../../state/actions/link-shorting.actions';

@Component({
  selector: 'app-short-box',
  templateUrl: './short-box.component.html',
  styleUrls: ['./short-box.component.scss'],
})
export class ShortBoxComponent implements OnInit {
  constructor(private _fb: FormBuilder, private _store: Store<any>) {}

  urlForm!: FormGroup;

  errors: {
    [key: string]: string;
  } = {
    required: 'Please add a link',
    pattern: 'Please enter a valid url',
    error: 'Something went wrong, please enter a valid url',
  };

  lastestLinks: ShortedLinkI[] = [];

  ngOnInit(): void {
    this.urlForm = this.initForm();

    this._store.dispatch(loadShortedLinks());
    // this._short.shortedLinks.subscribe(
    //   (links: ShortedLinkI[]) => (this.lastestLinks = links.slice(-3).reverse())
    // );
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
