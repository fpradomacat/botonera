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


  sections: Section[] = this.sonidosService.getSoundsBySections();

  constructor(public sonidosService: SoundListService,
              private soundPlayerService: SoundPlayerService) {
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyPressed(event: KeyboardEvent) {
    if (event.shiftKey) {
      this.soundPlayerService.stopCurrentSound();
    } else {
      const hotkey: Hotkey = {key: event.key, isCtrlPressed: event.ctrlKey};
      this.soundPlayerService.playSoundByHotkey(hotkey);
    }
  }
}
