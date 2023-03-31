import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LinkI } from '../../models/link-i';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent {
  @Input() links!: LinkI[];

  show: boolean = false;

  public showNav(): void {
    this.show = !this.show;
  }
}
