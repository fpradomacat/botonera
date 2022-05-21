export class Sound {

  readonly _displayName: string;
  readonly _source: string;

  constructor(_displayName: string,
              _source: string) {
    this._displayName = _displayName;
    this._source = _source;
  }

  get displayName() {
    return this._displayName;
  }

  get source() {
    return this._source;
  }
}
