import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortBoxComponent } from './components/short-box/short-box.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '../buttons/buttons.module';
import { LinkCardComponent } from './components/link-card/link-card.component';

@NgModule({
  declarations: [ShortBoxComponent, LinkCardComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, ButtonsModule],
  exports: [ShortBoxComponent],
})
export class LinkShortingModule {}
