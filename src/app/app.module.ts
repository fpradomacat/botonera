import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';

import { HomeComponent } from './components/home/home.component';
import { SoundCardComponent } from './components/shared/sound-card/sound-card.component';
import { SoundListService } from './services/sound-list.service';
import { SoundPlayerService } from './services/sound-player.service';
import { SectionComponent } from './components/shared/section/section.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SoundCardComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    SoundListService,
    SoundPlayerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
