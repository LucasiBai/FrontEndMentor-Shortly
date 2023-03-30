import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavBarComponent, SidemenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavBarComponent],
})
export class NavigationModule {}
