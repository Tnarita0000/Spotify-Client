import Vue from 'vue'
import Component from 'vue-class-component'
import SideNavigationBarComponent from '../components/SideNavigationBar.vue'
import UrlParser from '../mixins/url_parser'
import UserModel from '../model/user'
import PlaylistsModel from '../model/playlists'
import PlayerModel from '../model/player'

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
    this.userModel = new UserModel();
    this.playlistsModel = new PlaylistsModel();
    this.playerModel = new PlayerModel();
    this.user = null;
    this.playlists = null;
    this.player = null;
    this.isUserLoaded = false;
  }

  created() {
    const access_token = UrlParser.params.access_token;
    this.userModel.load(access_token).then(data => {
      this.user = data;
      this.isUserLoaded = true;
    });
    this.playlistsModel.load(access_token).then(data => {
      this.playlists = data;
    });
    this.playerModel.loadRecentlyPlayed(access_token).then(data => {
      this.player = data;
    });
  }
}

new ViewModel({
  el: "#main",
});
