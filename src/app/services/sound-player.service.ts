import { Injectable } from '@angular/core';
import { Sound } from '../classes/Sound';

@Injectable()
export class SoundPlayerService {
  audio = new Audio();

  constructor() {
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

}
