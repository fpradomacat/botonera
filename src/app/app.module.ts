import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';

import { HomeComponent } from './components/home/home.component';
import { SoundCardComponent } from './components/shared/sound-card/sound-card.component';
import { AudioListService } from './services/audio-list.service';
import { SoundPlayerService } from './services/sound-player.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SoundCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    AudioListService,
    SoundPlayerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
