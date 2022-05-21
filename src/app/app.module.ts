import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';

import { HomeComponent } from './components/home/home.component';
import { ListaAudiosService } from './components/home/home.service';
import { SoundCardComponent } from './components/shared/sound-card/sound-card.component';

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
    ListaAudiosService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
