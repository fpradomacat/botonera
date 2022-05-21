import { Component } from '@angular/core';
import { ListaAudiosService } from './home.service';

@Component({
  selector: 'app-home',
  host: {'(keyup)': 'hotkeys($event)'},
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  version: string = '1.1/3.x.@f.24-RELEASE';
  audio = new Audio();

  public hotKeys = {};
  public combinedHotKeys = {};

  public listaESolutions = [];
  public clasicos = [];
  public biancho = [];

  constructor(private sonidosService: ListaAudiosService) {
    this.obtenerListasAudio();
    this.hotKeys = this.sonidosService.getObjetoHotKeys();
    this.combinedHotKeys = this.sonidosService.getObjetoHotKeysCombinadas();
  }

  obtenerListasAudio() {
    this.listaESolutions = this.sonidosService.getListaESolutions();
    this.clasicos = this.sonidosService.getListaClasicos();
    this.biancho = this.sonidosService.getListaBiancho();
  }

  public play(src): void {
    if (src != 'undefined') {
      this.audio.src = '../assets/audio/' + src + '.mp3';
      this.audio.load();
      this.audio.play();
    }
  }

  public stop(): void {
    this.audio.pause();
  }

  hotkeys($event) {
    if ($event.keyCode == 16) {
      this.stop();
    } else {
      if ($event.keyCode && $event.ctrlKey) {
        this.play(`${this.combinedHotKeys[$event.keyCode]}`);
        return true;
      }
      this.play(`${this.hotKeys[$event.keyCode]}`);
    }
    return true;
  }
}
