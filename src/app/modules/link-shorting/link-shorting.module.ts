import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortBoxComponent } from './components/short-box/short-box.component';

@NgModule({
  declarations: [ShortBoxComponent],
  imports: [CommonModule],
  exports: [ShortBoxComponent],
})
export class LinkShortingModule {}
