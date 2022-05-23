import { Injectable } from '@angular/core';
import { Hotkey } from '../classes/Hotkey';
import { Sound } from '../classes/Sound';
import { SoundListService } from './sound-list.service';
import { SoundPlayer } from './sound-player';

@Injectable()
export class SoundPlayerService extends SoundPlayer {
  private audio = new Audio();

  constructor(private soundListService: SoundListService) {
    super();
  }

  public playSound(sound: Sound): void {
    this.audio.src = sound.source;
    this.play();
  }

  public playSoundByHotkey(hotkey: Hotkey) {
    const sound = this.soundListService.getSoundByHotkey(hotkey);
    if (sound) {
      this.playSound(sound);
    }
  }

  public stopCurrentSound(): void {
    this.audio.pause();
  }

  private play(): void {
    this.audio.load();
    this.audio.play();
  }

}
