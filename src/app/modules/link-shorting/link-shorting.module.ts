import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortBoxComponent } from './components/short-box/short-box.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ShortBoxComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ShortBoxComponent],
})
export class LinkShortingModule {}
