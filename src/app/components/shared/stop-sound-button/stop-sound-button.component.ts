import { Component, HostListener } from '@angular/core';
import { SoundPlayerService } from '../../../services/sound-player.service';

@Component({
  selector: 'app-stop-sound-button',
  templateUrl: './stop-sound-button.component.html',
  styleUrls: ['./stop-sound-button.component.scss']
})
export class StopSoundButtonComponent {

  isStopButtonActive = false;

  constructor(private soundPlayerService: SoundPlayerService) {
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
}
