import axios from 'axios'
import User from '../jsonmodel/user'

export default class UserApi {
  async load(access_token) {
    const res = await axios.get('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': 'Bearer ' + access_token
      }
    })
    return new User(res.data);
  }
}
