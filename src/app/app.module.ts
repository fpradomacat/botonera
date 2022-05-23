import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';

import { HomeComponent } from './components/home/home.component';
import { SoundCardComponent } from './components/shared/sound-card/sound-card.component';
import { SoundListService } from './services/sound-list.service';
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
    SoundListService,
    SoundPlayerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
