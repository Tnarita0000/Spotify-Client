import Vue from 'vue'
import Component from 'vue-class-component'
import UserApi from '../api/user'
import UrlParser from '../mixins/url_parser'

@Component({
  mixins: [UrlParser],
})
class ViewModel extends Vue {
  created() {
    this.api = new UserApi();
    if (UrlParser.params.error) {
      alert('There was an error during the authentication');
    } else {
      this.api.load(UrlParser.params.access_token);
    }
  }
}

new ViewModel({
  el: "#main",
});
