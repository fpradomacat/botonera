import { Component, HostListener, OnInit } from '@angular/core';
import { AudioListService } from '../../services/audio-list.service';
import { SoundPlayerService } from '../../services/sound-player.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public hotKeys = {};
  public combinedHotKeys = {};

  public listaESolutions = [];
  public clasicos = [];
  public biancho = [];

  constructor(private sonidosService: AudioListService,
              private soundPlayerService: SoundPlayerService) {
  }

  ngOnInit() {
    this.obtenerListasAudio();
    this.hotKeys = this.sonidosService.getObjetoHotKeys();
    this.combinedHotKeys = this.sonidosService.getObjetoHotKeysCombinadas();
  }

  obtenerListasAudio() {
    this.listaESolutions = this.sonidosService.getListaESolutions();
    this.clasicos = this.sonidosService.getListaClasicos();
    this.biancho = this.sonidosService.getListaBiancho();
  }

  public play(src: string): void {
    this.soundPlayerService.playSoundBySource(src);
  }

  public stop(): void {
    this.soundPlayerService.stopCurrentSound();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyPressed($event: KeyboardEvent) {
    if (this.isShiftKey($event)) {
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

  private isShiftKey($event: KeyboardEvent): boolean {
    return ['ShiftLeft', 'ShiftRight'].includes($event.code);
  }
}
