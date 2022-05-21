import { Hotkey } from './Hotkey';

export class Sound {

  readonly _displayName: string;
  readonly _source: string;
  readonly _hotkey: Hotkey;

  constructor(_displayName: string,
              _source: string,
              _keyCode: string = '',
              _isCtrlPressed: boolean = false) {
    this._displayName = _displayName;
    this._source = _source;
    this._hotkey = {keyCode: _keyCode, isCtrlPressed: _isCtrlPressed};
  }

  get displayName() {
    return this._displayName;
  }

  get source() {
    return `../../assets/audio/${this._source}.mp3`;
  }
}
