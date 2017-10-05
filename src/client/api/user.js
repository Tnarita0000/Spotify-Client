import axios from 'axios'
import $ from 'jquery'
import User from '../models/user'

export default class UserApi {
  constructor() {
    this.load();
  }

  load() {
    if (this.params.error) {
      alert('There was an error during the authentication');
    } else {
      if (this.params.access_token) {
        return axios.get('https://api.spotify.com/v1/me', {
          headers: {
            'Authorization': 'Bearer ' + this.params.access_token
          }
        }).then(res => {
          this.data = res.data;
          console.log(this);
          console.log(res);
        });
      }
    }
  }

  get params() {
    const hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g;
    const q  = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
}
