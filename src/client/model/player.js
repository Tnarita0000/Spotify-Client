import PlayerApi from '../api/player'

export default class PlayerModel {
  constructor() {
    this.api = new PlayerApi();
  }

  load(access_token) {
    return this.api.load(access_token);
  }

  loadRecentlyPlayed(access_token) {
    return this.api.loadRecentlyPlayed(access_token);
  }

  loadCurrentPlaying(access_token) {
    return this.api.loadCurrentPlaying(access_token);
  }
}
