import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss'],
})
export class TextButtonComponent implements OnInit, AfterViewInit {
  @Input() type!: string;
  @Input() fontSize!: number;

  @ViewChild('button') button!: ElementRef;

  ngOnInit(): void {
    !this.type && (this.type = 'fat');
  }

  ngAfterViewInit(): void {
    if (this.fontSize !== undefined) {
      this.button.nativeElement.style.fontSize = `${this.fontSize}px`;
    }
  }
}
