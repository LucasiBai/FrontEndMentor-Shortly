import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortBoxComponent } from './components/short-box/short-box.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '../buttons/buttons.module';
import { LinkCardComponent } from './components/link-card/link-card.component';
import { RequestInterceptor } from './interceptors/request.interceptor';

@NgModule({
  declarations: [ShortBoxComponent, LinkCardComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, ButtonsModule],
  exports: [ShortBoxComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  ],
})
export class LinkShortingModule {}
