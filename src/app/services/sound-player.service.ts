import { Injectable } from '@angular/core';
import { Hotkey } from '../classes/Hotkey';
import { Sound } from '../classes/Sound';
import { SoundListService } from './sound-list.service';

@Injectable()
export class SoundPlayerService {
  audio = new Audio();

  constructor(private soundListService: SoundListService) {
  }

  public playSound(sound: Sound): void {
    this.audio.src = sound.source;
    this.audio.load();
    this.audio.play();
  }

  public playSoundBySource(source: string): void {
    this.audio.src = '../../assets/audio/' + source + '.mp3';
    this.audio.load();
    this.audio.play();
  }

  public stopCurrentSound(): void {
    this.audio.pause();
  }

  public playSoundByHotkey(hotkey: Hotkey) {
    const sound = this.soundListService.getSoundByHotkey(hotkey);
    if(sound) {
      this.playSound(sound);
    }
  }

}
