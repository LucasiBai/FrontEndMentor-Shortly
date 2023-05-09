import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconCardComponent } from './components/icon-card/icon-card.component';
import { IconCardListComponent } from './components/icon-card-list/icon-card-list.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [IconCardComponent, IconCardListComponent, LoaderComponent],
  imports: [CommonModule],
  exports: [IconCardComponent, IconCardListComponent, LoaderComponent],
})
export class DecorationsModule {}
