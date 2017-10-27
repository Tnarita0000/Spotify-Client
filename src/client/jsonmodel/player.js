export default class Player {
  constructor(json) {
    this._root;
    this._recentlyPlayed;
    this._currentPlaying;
  }

  set root(json) {
    this._root = json;
  }
  get root() {
    return this._root;
  }

  set recentlyPlayed(json) {
    this._recentlyPlayed = json;
  }
  get recentlyPlayed() {
    return this._recentlyPlayed;
  }

  set currentPlaying(json) {
    this._currentPlaying = json;
  }
  get currentPlaying() {
    return this._currentPlaying;
  }

}
