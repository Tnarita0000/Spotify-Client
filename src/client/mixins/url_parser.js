import Vue from 'vue'

export default class UrlParser extends Vue {
  static get params() {
    const hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g;
    const q  = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
}
