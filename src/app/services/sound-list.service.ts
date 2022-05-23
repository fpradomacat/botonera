import { Injectable } from '@angular/core';
import { Hotkey } from '../classes/Hotkey';
import { Section } from '../classes/Section';
import { Sound } from '../classes/Sound';
import { allSounds, bianchoSounds, classicsSounds, eSolutionsSounds } from './sound-lists';

@Injectable()
export class SoundListService {

  getSoundsBySections(): Section[] {
    return [
      new Section('ESolutions', 'Fila letra "A"', eSolutionsSounds),
      new Section('Biancho', 'Fila letra "Z"', bianchoSounds),
      new Section('Clásicos', 'Fila letra "W"', classicsSounds),
    ];
  }

  getSoundByHotkey(hotkey: Hotkey): Sound | undefined {
    return this.allSounds.find(x => x.isSameHotkey(hotkey));
  }

  private get allSounds() {
    return allSounds;
  }

}
