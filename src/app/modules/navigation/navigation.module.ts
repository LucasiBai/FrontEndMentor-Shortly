import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from '../buttons/buttons.module';

@NgModule({
  declarations: [NavBarComponent, SidemenuComponent],
  imports: [CommonModule, RouterModule, ButtonsModule],
  exports: [NavBarComponent],
})
export class NavigationModule {}
