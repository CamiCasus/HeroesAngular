import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

import { APPROUTING } from './app.routes';

import { HeroesService } from './services/heroes.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavmenuComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    APPROUTING
  ],
  providers: [ HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
