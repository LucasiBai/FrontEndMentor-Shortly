import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShortedLinkI } from '../../models/shorted-link-i';
import { ShortLinkService } from '../../services/short-link.service';

@Component({
  selector: 'app-short-box',
  templateUrl: './short-box.component.html',
  styleUrls: ['./short-box.component.scss'],
})
export class ShortBoxComponent implements OnInit {
  constructor(private _fb: FormBuilder, private _short: ShortLinkService) {}

  urlForm!: FormGroup;

  lastestLinks: ShortedLinkI[] = [];

  ngOnInit(): void {
    this.urlForm = this.initForm();

    this._short.shortedLinks.subscribe(
      (links: ShortedLinkI[]) => (this.lastestLinks = links)
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
    const link = this.urlForm.value['url'];

    this._short
      .shortLink(link)
      .subscribe((link: ShortedLinkI) => this.lastestLinks.push(link));
    this.urlForm = this.initForm();
  }
}
