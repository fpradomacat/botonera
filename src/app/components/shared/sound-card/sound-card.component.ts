import { Component, Input } from '@angular/core';
import { SoundPlayerService } from '../../../services/sound-player.service';
import { Sound } from '../../../classes/Sound';

@Component({
  selector: 'app-sound-card',
  templateUrl: './sound-card.component.html',
  styleUrls: ['./sound-card.component.scss']
})
export class SoundCardComponent {

  @Input()
  sound: Sound;
  audio = new Audio();

  constructor(private soundPlayerService: SoundPlayerService) {
  }

  public play(sound: Sound): void {
    this.soundPlayerService.playSound(sound);

  }

}
