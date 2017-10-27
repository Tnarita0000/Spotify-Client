import axios from 'axios'
import Player from '../jsonmodel/player'

export default class PlayerApi {
  constructor() {
    this.player = new Player();
  }

  async load(access_token) {
    const res = await axios.get('https://api.spotify.com/v1/me/player', {
      headers: {
        'Authorization': 'Bearer ' + access_token
      }
    })
    this.player.root = res.data;
    return this.player.root;
  }

  async loadRecentlyPlayed(access_token) {
    const res = await axios.get('https://api.spotify.com/v1/me/player/recently-played', {
      headers: {
        'Authorization': 'Bearer ' + access_token
      }
    })
    this.player.recentlyPlayed = res.data;
    return this.player.recentlyPlayed;
  }

  async loadCurrentPlaying(access_token) {
    const res = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Authorization': 'Bearer ' + access_token
      }
    })
    this.player.currentPlaying = res.data;
    console.log(res.data);
    return this.player.currentPlaying;
  }
}
