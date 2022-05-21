import { Component, HostListener, OnInit } from '@angular/core';
import { AudioListService } from '../../services/audio-list.service';
import { SoundPlayerService } from '../../services/sound-player.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  listaESolutions = this.sonidosService.eSolutionsSounds;
  clasicos = this.sonidosService.classicsSounds;
  biancho = this.sonidosService.bianchoSounds;

  private hotKeys = this.sonidosService.hotkeys;
  private combinedHotKeys = this.sonidosService.hotkeysWithCtrlPressed;

  constructor(private sonidosService: AudioListService,
              private soundPlayerService: SoundPlayerService) {
  }

  private playSoundBySource(src: string): void {
    this.soundPlayerService.playSoundBySource(src);
  }

  public stopCurrentSound(): void {
    this.soundPlayerService.stopCurrentSound();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyPressed($event: KeyboardEvent) {
    if (this.isShiftKey($event)) {
      this.stopCurrentSound();
    } else {
      if ($event.keyCode && $event.ctrlKey) {
        this.playSoundBySource(`${this.combinedHotKeys[$event.keyCode]}`);
      } else {
        this.playSoundBySource(`${this.hotKeys[$event.keyCode]}`);
      }
    }
  }

  private isShiftKey($event: KeyboardEvent): boolean {
    return ['ShiftLeft', 'ShiftRight'].includes($event.code);
  }
}
