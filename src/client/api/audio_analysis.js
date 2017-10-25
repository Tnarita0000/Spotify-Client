import axios from 'axios'
//import Player from '../jsonmodel/player'

export default class AudioAnalysisApi {
  async loadAudioAnalysis(access_token, trackId) {
    const res = await axios.get('https://api.spotify.com/v1/audio-analysis/' + trackId, {
      headers: {
        'Authorization': 'Bearer ' + access_token
      }
    })
    return res.data;
  }
}
