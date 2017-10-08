import axios from 'axios'
import Playlists from '../jsonmodel/playlists.js'

export default class PlaylistsApi {
  async load(access_token) {
    const res = await axios.get('https://api.spotify.com/v1/me/playlists', {
      headers: {
        'Authorization': 'Bearer ' + access_token
      }
    })
    return new Playlists(res.data);
  }
}
