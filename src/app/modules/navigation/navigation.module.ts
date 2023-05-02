import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from '../buttons/buttons.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NavBarComponent, SidemenuComponent, FooterComponent],
  imports: [CommonModule, RouterModule, ButtonsModule],
  exports: [NavBarComponent, FooterComponent],
})
export class NavigationModule {}
