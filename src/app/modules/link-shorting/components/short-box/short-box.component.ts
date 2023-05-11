import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShortedLinkI } from '../../models/shorted-link-i';
import { ShortLinkService } from '../../services/short-link.service';
import { assert } from 'ts-essentials';

@Component({
  selector: 'app-short-box',
  templateUrl: './short-box.component.html',
  styleUrls: ['./short-box.component.scss'],
})
export class ShortBoxComponent implements OnInit {
  constructor(private _fb: FormBuilder, private _short: ShortLinkService) {}

  urlForm!: FormGroup;

  errors: {
    [key: string]: string;
  } = {
    required: 'Please add a link',
    pattern: 'Please enter a valid url',
  };

  lastestLinks: ShortedLinkI[] = [];

  ngOnInit(): void {
    this.urlForm = this.initForm();

    this._short.shortedLinks.subscribe(
      (links: ShortedLinkI[]) => (this.lastestLinks = links.slice(-3).reverse())
    );
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

    this._short.shortLink(link).subscribe((link: ShortedLinkI) => {});
    this.urlForm = this.initForm();
  }

  getErrorMessage(): string {
    const error = Object.keys(this.urlForm.get('url')?.errors || {})[0];

    return this.errors[error];
  }
}
