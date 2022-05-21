import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sound-card',
  templateUrl: './sound-card.component.html',
  styleUrls: ['./sound-card.component.scss']
})
export class SoundCardComponent {

  @Input()
  sound: any;
  audio = new Audio();

  constructor() {
  }

  public play(src): void {
    if (src != 'undefined') {
      this.audio.src = '../assets/audio/' + src + '.mp3';
      this.audio.load();
      this.audio.play();
    }
  }

}
