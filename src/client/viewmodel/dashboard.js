import Vue from 'vue'
import VueChartJs from 'vue-chartjs'
import {Bar} from 'vue-chartjs'
import Component from 'vue-class-component'
import SideNavigationBarComponent from 'components/SideNavigationBar.vue'
import CurrentPlayingFooterComponent from 'components/CurrentPlayingFooter.vue'
import TrackAnalyzerComponent from 'components/TrackAnalyzer.vue'
import UrlParser from 'mixins/url_parser'
import PlaylistsModel from 'model/playlists'
import PlayerModel from 'model/player'
import AudioAnalysisModel from 'model/audio_analysis'
import html from 'assets/html/dashboard.html'
import 'assets/stylesheets/style.scss'

@Component({
  mixins: [UrlParser],
  template: html,
  components: {
    SideNavigationBarComponent,
    CurrentPlayingFooterComponent,
    TrackAnalyzerComponent,
  }
})
class ViewModel extends Vue {
  constructor() {
    super();
    this.player = null;
    this.recentPlayedTrack = null;
    this.currentPlayingTrack = null;
    this.analyzedTrack = null;
    this.isUserLoaded = false;
  }

  created() {
    const playerModel = new PlayerModel();
    const audioAnalysisModel = new AudioAnalysisModel();
    const access_token = UrlParser.params.access_token;
    playerModel.load(access_token).then(data => {
      this.player = data;
      audioAnalysisModel.loadAudioAnalysis(access_token, data.item.id).then(data => {
        this.analyzedTrack = data;
      });
    });
    playerModel.loadCurrentPlaying(access_token).then(data => {
      this.currentPlayingTrack = data;
    });
    playerModel.loadRecentlyPlayed(access_token).then(data => {
      this.recentPlayedTrack = data;
    });
  }
}

new ViewModel({
  el: "#main",
});
