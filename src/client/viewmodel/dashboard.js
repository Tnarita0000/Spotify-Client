import Vue from 'vue'
import Component from 'vue-class-component'
import UrlParser from '../mixins/url_parser'
import UserModel from '../model/user'
import PlaylistsModel from '../model/playlists'
import html from '../assets/html/dashboard.html'

@Component({
  mixins: [UrlParser],
  template: html
})
class ViewModel extends Vue {
  constructor() {
    super();
    this.userModel = new UserModel();
    this.playlistsModel = new PlaylistsModel();
    this.user = null;
    this.playlists = null;
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
  }
}

new ViewModel({
  el: "#main",
});
