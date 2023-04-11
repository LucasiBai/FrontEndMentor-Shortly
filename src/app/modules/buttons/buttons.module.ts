import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextButtonComponent } from './components/text-button/text-button.component';
import { SquareButtonTextComponent } from './components/square-button-text/square-button-text.component';

@NgModule({
  declarations: [TextButtonComponent, SquareButtonTextComponent],
  imports: [CommonModule],
  exports: [TextButtonComponent, SquareButtonTextComponent],
})
export class ButtonsModule {}
