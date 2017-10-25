import Vue from 'vue'
import Component from 'vue-class-component'
import SideNavigationBarComponent from '../components/SideNavigationBar.vue'
import UrlParser from '../mixins/url_parser'
import UserModel from '../model/user'
import PlaylistsModel from '../model/playlists'
import PlayerModel from '../model/player'
import AudioAnalysisModel from '../model/audio_analysis'
import html from '../assets/html/dashboard.html'

@Component({
  mixins: [UrlParser],
  template: html,
  components: {
    SideNavigationBarComponent
  }
})
class ViewModel extends Vue {
  constructor() {
    super();
    this.user = null;
    this.recentPlayedTrack = null;
    this.analyzedTracks = [];
    this.isUserLoaded = false;
  }

  created() {
    const userModel = new UserModel();
    const playerModel = new PlayerModel();
    const audioAnalysisModel = new AudioAnalysisModel();
    const access_token = UrlParser.params.access_token;
    userModel.load(access_token).then(data => {
      this.user = data;
      this.isUserLoaded = true;
    });
    playerModel.loadRecentlyPlayed(access_token).then(data => {
      this.recentPlayedTrack = data;
      data.items.map(item => {
        audioAnalysisModel.loadAudioAnalysis(access_token, item.track.id).then(data => {
          this.analyzedTracks.push(data);
        });
      });
    });
  }
}

new ViewModel({
  el: "#main",
});
