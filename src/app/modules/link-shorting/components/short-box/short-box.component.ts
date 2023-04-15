import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-short-box',
  templateUrl: './short-box.component.html',
  styleUrls: ['./short-box.component.scss'],
})
export class ShortBoxComponent implements OnInit {
  constructor(private _fb: FormBuilder) {}

  urlForm!: FormGroup;

  ngOnInit(): void {
    this.urlForm = this.initForm();
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
    console.log(this.urlForm.value['url']);
    // TODO: Complete function
  }
}
