import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortBoxComponent } from './components/short-box/short-box.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '../buttons/buttons.module';
import { LinkCardComponent } from './components/link-card/link-card.component';
import { LoaderInterceptor } from '../decorations/interceptors/loader.interceptor';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './state/link-shorting.state';
import { EffectsModule } from '@ngrx/effects';
import { LinkShortingEffects } from './state/effects/link-shorting.effects';

@NgModule({
  declarations: [ShortBoxComponent, LinkCardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([LinkShortingEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  exports: [ShortBoxComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
})
export class LinkShortingModule {}
