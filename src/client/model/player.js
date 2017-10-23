import PlayerApi from '../api/player'

export default class PlayerModel {
  constructor() {
    this.api = new PlayerApi();
  }

  loadRecentlyPlayed(access_token) {
    return this.api.loadRecentlyPlayed(access_token);
  }
}
