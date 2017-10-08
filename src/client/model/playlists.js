import PlaylistsApi from '../api/playlists'

export default class PlaylistsModel {
  constructor() {
    this.api = new PlaylistsApi();
  }

  load(access_token) {
    return this.api.load(access_token);
  }
}
