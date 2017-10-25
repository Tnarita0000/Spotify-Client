import AudioAnalysisApi from '../api/audio_analysis'

export default class AudioAnalysisModel {
  constructor() {
    this.api = new AudioAnalysisApi();
  }

  loadAudioAnalysis(access_token, trackId) {
    return this.api.loadAudioAnalysis(access_token, trackId);
  }
}
