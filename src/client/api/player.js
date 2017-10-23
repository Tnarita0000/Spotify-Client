import axios from 'axios'
import Player from '../jsonmodel/player'

export default class PlayerApi {
  async loadRecentlyPlayed(access_token) {
    const res = await axios.get('https://api.spotify.com/v1/me/player/recently-played', {
      headers: {
        'Authorization': 'Bearer ' + access_token
      }
    })
    return new Player(res.data);
  }
}
