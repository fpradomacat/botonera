import { Component, HostListener } from '@angular/core';
import { Hotkey } from '../../classes/Hotkey';
import { Section } from '../../classes/Section';
import { SoundListService } from '../../services/sound-list.service';
import { SoundPlayerService } from '../../services/sound-player.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  isStopButtonActive = false;

  sections: Section[] = this.sonidosService.getSoundsBySections();

  constructor(public sonidosService: SoundListService,
              private soundPlayerService: SoundPlayerService) {
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
