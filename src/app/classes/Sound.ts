import { Hotkey } from './Hotkey';

export class Sound {

  readonly _source: string;
  readonly _displayName: string;
  readonly _hotkey: Hotkey;

  constructor(_source: string,
              _displayName: string,
              _keyCode: string = '',
              _isCtrlPressed: boolean = false) {
    this._source = _source;
    this._displayName = _displayName;
    this._hotkey = {keyCode: _keyCode, isCtrlPressed: _isCtrlPressed};
  }

  get displayName() {
    return this._displayName;
  }

  get source() {
    return `../../assets/audio/${this._source}.mp3`;
  }

  isSameHotkey(hotkey: Hotkey) {
    return this._hotkey.keyCode === hotkey.keyCode && this._hotkey.isCtrlPressed === hotkey.isCtrlPressed;
  }
}
