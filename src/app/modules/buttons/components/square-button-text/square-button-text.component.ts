import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-square-button-text',
  templateUrl: './square-button-text.component.html',
  styleUrls: ['./square-button-text.component.scss'],
})
export class SquareButtonTextComponent implements OnInit, AfterViewInit {
  @Input() fill!: boolean;
  @Input() clicked!: boolean;
  @Input() fontSize!: number;

  @ViewChild('button') button!: ElementRef;

  ngOnInit(): void {
    this.fill = this.fill ? this.fill : false;
    this.clicked = this.clicked ? this.clicked : false;
  }

  ngAfterViewInit(): void {
    if (this.fontSize !== undefined) {
      this.button.nativeElement.style.fontSize = `${this.fontSize}px`;
    }
  }
}
