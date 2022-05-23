import { Hotkey } from '../classes/Hotkey';
import { Sound } from '../classes/Sound';

export abstract class SoundPlayer {

  abstract playSound(sound: Sound): void;

  abstract playSoundByHotkey(hotkey: Hotkey): void;

  abstract stopCurrentSound(): void;
}
