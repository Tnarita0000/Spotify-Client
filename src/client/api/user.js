import axios from 'axios'
import User from '../models/user'

export default class UserApi {
  load(access_token) {
    axios.get('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': 'Bearer ' + access_token
      }
    }).then(res => {this.json = res.data});
  }
}
