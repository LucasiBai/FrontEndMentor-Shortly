import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './modules/navigation/navigation.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ButtonsModule } from './modules/buttons/buttons.module';

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [BrowserModule, AppRoutingModule, NavigationModule, ButtonsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
