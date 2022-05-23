import { Component, HostListener } from '@angular/core';
import { Hotkey } from '../../classes/Hotkey';
import { SoundListService } from '../../services/sound-list.service';
import { SoundPlayerService } from '../../services/sound-player.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  isStopButtonActive = false;

  listaESolutions = this.sonidosService.eSolutionsSounds;
  clasicos = this.sonidosService.classicsSounds;
  biancho = this.sonidosService.bianchoSounds;

  constructor(public sonidosService: SoundListService,
              private soundPlayerService: SoundPlayerService) {
  }

  private playSoundBySource(src: string): void {
    this.soundPlayerService.playSoundBySource(src);
  }

  public stopCurrentSound(): void {
    this.soundPlayerService.stopCurrentSound();
  }

  @HostListener('window:keydown.shift')
  handleShiftKeydown() {
    this.isStopButtonActive = true;
  }

  @HostListener('window:keyup.shift')
  handleShiftKeyup() {
    this.isStopButtonActive = false;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyPressed(event: KeyboardEvent) {
    if (event.shiftKey) {
      this.stopCurrentSound();
    } else {
      const hotkey: Hotkey = {key: event.key, isCtrlPressed: event.ctrlKey};
      this.soundPlayerService.playSoundByHotkey(hotkey);
    }
  }
}
