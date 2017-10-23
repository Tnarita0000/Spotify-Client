import UserApi from '../api/user'

export default class UserModel {
  constructor() {
    this.api = new UserApi();
  }

  load(access_token) {
    return this.api.load(access_token);
  }
}
