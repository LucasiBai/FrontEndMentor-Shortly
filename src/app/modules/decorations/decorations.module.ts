import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconCardComponent } from './components/icon-card/icon-card.component';
import { IconCardListComponent } from './components/icon-card-list/icon-card-list.component';

@NgModule({
  declarations: [IconCardComponent, IconCardListComponent],
  imports: [CommonModule],
  exports: [IconCardComponent, IconCardListComponent],
})
export class DecorationsModule {}
